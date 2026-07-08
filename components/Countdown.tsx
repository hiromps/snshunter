"use client";

import { useEffect, useState } from "react";
import { AvatarStack } from "./Avatar";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function Countdown() {
  // Target: next midnight UTC — computed on the client to avoid hydration drift.
  const [left, setLeft] = useState<{ h: number; m: number; s: number } | null>(
    null,
  );

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const target = new Date(now);
      target.setHours(24, 0, 0, 0);
      const diff = Math.max(0, target.getTime() - now.getTime());
      setLeft({
        h: Math.floor(diff / 3.6e6),
        m: Math.floor((diff % 3.6e6) / 6e4),
        s: Math.floor((diff % 6e4) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto flex w-fit items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-6 py-4">
      <div>
        <p className="font-display text-xl text-white">
          Next Drop:{" "}
          <span className="tabular-nums">
            {left ? `${pad(left.h)}:${pad(left.m)}:${pad(left.s)}` : "--:--:--"}
          </span>
        </p>
        <p className="text-xs text-white/50">800 Creators</p>
      </div>
      <AvatarStack count={5} size={30} start={3} />
    </div>
  );
}
