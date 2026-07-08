"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import styles from "./InsidePovCarousel.module.css";

/** CSS変数もtypeチェックを通すためのユーティリティ型 */
type CSSVars = CSSProperties & Record<`--${string}`, string | number>;

export type VideoItem = {
  src: string;
  poster?: string;
  alt?: string;
};

export type InsidePovCarouselProps = {
  videos: VideoItem[];
  autoRotate?: boolean;
  interactive?: boolean;
  className?: string;
};

/** 自動回転の速度（deg / frame）。0.04 ≒ 2.4deg/s */
const AUTO_SPEED = 0.04;
/** ドラッグ感度（deg / px） */
const DRAG_SENSITIVITY = 0.28;
/** 慣性の減衰率（1に近いほど長く滑る） */
const FRICTION = 0.94;
/** 慣性を止める閾値 */
const VELOCITY_EPSILON = 0.01;

export default function InsidePovCarousel({
  videos,
  autoRotate = true,
  interactive = true,
  className,
}: InsidePovCarouselProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const brightnessCacheRef = useRef<number[]>([]);
  const frameRef = useRef(0);
  // 中央darkeningの強さ（デスクトップ=0.28 / モバイル=0：フラット均等）
  const depthRef = useRef(0.28);

  // rAFループから参照する可変値はすべてrefで保持し、再レンダーを避ける
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const autoRotatingRef = useRef(autoRotate);

  // 見た目に影響する最小限の状態のみReact stateで管理（UIボタンは一切なし）
  const [autoRotating, setAutoRotating] = useState(autoRotate);
  const [isDragging, setIsDragging] = useState(false);

  // カード枚数から1枚あたりの角度を自動計算（SSRでも決定的）
  const step = useMemo(() => 360 / Math.max(videos.length, 1), [videos.length]);
  const stepRef = useRef(step);

  // autoRotating state / step を rAF 参照用 ref に同期
  useEffect(() => {
    autoRotatingRef.current = autoRotating;
  }, [autoRotating]);
  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  // モバイル（≤760px）では奥行き明度を切って参照どおりのフラット均等な見た目に
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 760px)");
    const update = () => {
      depthRef.current = mq.matches ? 0 : 0.28;
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // ------------------------------------------------------------------
  // メインアニメーションループ（自動回転 + 慣性をJS側で一元管理）
  // ------------------------------------------------------------------
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let rafId = 0;

    const tick = () => {
      // 自動回転：hover中・ドラッグ中・reduced-motion時は止める
      if (
        !reduceMotion &&
        autoRotatingRef.current &&
        !isDraggingRef.current &&
        !isHoveredRef.current
      ) {
        rotationRef.current += AUTO_SPEED;
      }

      // 慣性：ドラッグ終了後に velocity を減衰させながら回す
      if (
        !isDraggingRef.current &&
        Math.abs(velocityRef.current) > VELOCITY_EPSILON
      ) {
        rotationRef.current += velocityRef.current;
        velocityRef.current *= FRICTION;
      } else if (!isDraggingRef.current) {
        velocityRef.current = 0;
      }

      // transform（回転）は毎フレーム更新して常になめらかに
      root.style.setProperty("--pov-rotation", `${rotationRef.current}deg`);

      // Z軸の奥行きを明度で強調：カメラを向く（中央=遠い）カードほど暗く、
      // 真横に近い（外側=手前）カードほど明るく。
      // ※ 毎フレーム14枚に filter を書くと動画レイヤーの再描画が重く、ドラッグ時に
      //   引っかかる。ドラッグ中は明度更新を止め（transformのGPU合成のみ）、
      //   それ以外も3フレームに1回＋変化時のみ書き込んで負荷を削減。
      frameRef.current = (frameRef.current + 1) % 3;
      if (frameRef.current === 0 && !isDraggingRef.current) {
        const stepDeg = stepRef.current;
        const cards = cardRefs.current;
        const cache = brightnessCacheRef.current;
        const rot = rotationRef.current;
        for (let i = 0; i < cards.length; i += 1) {
          const card = cards[i];
          if (!card) continue;
          const angleRad = ((i * stepDeg + rot) * Math.PI) / 180;
          const facing = Math.max(0, Math.cos(angleRad)); // 1=正面(遠い), 0=真横(手前)
          // 0.02刻みに量子化し、前回と変わった時だけ style を書く
          const brightness = Math.round((1 - depthRef.current * facing) * 50) / 50;
          if (cache[i] !== brightness) {
            cache[i] = brightness;
            card.style.filter = `brightness(${brightness})`;
          }
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    // unmount時に必ずcancel
    return () => cancelAnimationFrame(rafId);
  }, []);

  // ------------------------------------------------------------------
  // 動画の自動再生 + タブ可視性ハンドリング
  // ------------------------------------------------------------------
  useEffect(() => {
    const vids = videoRefs.current.filter(
      (v): v is HTMLVideoElement => v != null
    );

    // autoplayがブロックされてもエラーを表面化させない
    const safePlay = (v: HTMLVideoElement) => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    vids.forEach(safePlay);

    const onVisibility = () => {
      if (document.hidden) {
        vids.forEach((v) => v.pause());
      } else {
        vids.forEach(safePlay);
      }
    };

    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [videos]);

  // ------------------------------------------------------------------
  // ポインタ操作（ドラッグ / スワイプ）— interactive時のみ
  // ------------------------------------------------------------------
  const onPointerDown = useCallback(
    (e: ReactPointerEvent<HTMLElement>) => {
      if (!interactive) return;
      isDraggingRef.current = true;
      velocityRef.current = 0;
      lastXRef.current = e.clientX;
      setIsDragging(true);
      e.currentTarget.setPointerCapture(e.pointerId);
    },
    [interactive]
  );

  const onPointerMove = useCallback(
    (e: ReactPointerEvent<HTMLElement>) => {
      if (!interactive || !isDraggingRef.current) return;
      const dx = e.clientX - lastXRef.current;
      lastXRef.current = e.clientX;
      const delta = dx * DRAG_SENSITIVITY;
      rotationRef.current += delta;
      velocityRef.current = delta; // ドラッグ終了時の慣性の初速
    },
    [interactive]
  );

  const endDrag = useCallback((e: ReactPointerEvent<HTMLElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* capture未設定時は無視 */
    }
  }, []);

  // ------------------------------------------------------------------
  // ホバー：自動回転の一時停止（rAFがisHoveredRefを毎フレーム参照）
  // ------------------------------------------------------------------
  const onMouseEnter = useCallback(() => {
    isHoveredRef.current = true;
  }, []);
  const onMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
  }, []);

  // ------------------------------------------------------------------
  // キーボード操作（表示UIなし・interactive時のみ）
  // ------------------------------------------------------------------
  const onKeyDown = useCallback(
    (e: ReactKeyboardEvent<HTMLElement>) => {
      if (!interactive) return;
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          velocityRef.current = -step * 0.06;
          break;
        case "ArrowRight":
          e.preventDefault();
          velocityRef.current = step * 0.06;
          break;
        case " ":
        case "Spacebar":
          e.preventDefault();
          setAutoRotating((v) => !v);
          break;
        default:
          break;
      }
    },
    [interactive, step]
  );

  // ルート要素のCSS変数（--pov-step は決定的にSSRから付与しhydration差分を防ぐ）
  const rootStyle: CSSVars = {
    "--pov-step": `${step}deg`,
  };

  const rootClassName = [
    styles.carousel,
    isDragging ? styles.dragging : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      ref={rootRef}
      className={rootClassName}
      style={rootStyle}
      tabIndex={interactive ? 0 : -1}
      aria-label="動画カルーセル"
      onPointerDown={interactive ? onPointerDown : undefined}
      onPointerMove={interactive ? onPointerMove : undefined}
      onPointerUp={interactive ? endDrag : undefined}
      onPointerCancel={interactive ? endDrag : undefined}
      onKeyDown={interactive ? onKeyDown : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.stage}>
        <div className={styles.world}>
          {videos.map((video, index) => (
            <figure
              key={`${video.src}-${index}`}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className={styles.card}
              style={{ "--i": index } as CSSVars}
            >
              <video
                ref={(node) => {
                  videoRefs.current[index] = node;
                }}
                className={styles.video}
                src={video.src}
                poster={video.poster}
                aria-label={video.alt}
                muted
                loop
                playsInline
                preload="auto"
              />
            </figure>
          ))}
        </div>
      </div>

      {/* スクロール（ドラッグ）可能を示すヒント：トグルが左→右に滑る＋右矢印 */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.toggle}>
          <span className={styles.knob} />
        </span>
        <svg
          className={styles.chevron}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </section>
  );
}
