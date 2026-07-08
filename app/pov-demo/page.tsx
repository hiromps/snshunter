import InsidePovCarousel, { type VideoItem } from "@/components/InsidePovCarousel";

// 本番では自社の動画URL（/public/videos 配下など）に差し替える。
// posterを入れておくと読み込み前・autoplayブロック時も見た目が崩れない。
const videos: VideoItem[] = [
  { src: "/videos/demo-1.mp4", poster: "/videos/poster-1.jpg" },
  { src: "/videos/demo-2.mp4", poster: "/videos/poster-2.jpg" },
  { src: "/videos/demo-3.mp4", poster: "/videos/poster-3.jpg" },
  { src: "/videos/demo-4.mp4", poster: "/videos/poster-4.jpg" },
  { src: "/videos/demo-5.mp4", poster: "/videos/poster-5.jpg" },
  { src: "/videos/demo-6.mp4", poster: "/videos/poster-6.jpg" },
  { src: "/videos/demo-7.mp4", poster: "/videos/poster-7.jpg" },
  { src: "/videos/demo-8.mp4", poster: "/videos/poster-8.jpg" },
  { src: "/videos/demo-9.mp4", poster: "/videos/poster-9.jpg" },
  { src: "/videos/demo-10.mp4", poster: "/videos/poster-10.jpg" },
  { src: "/videos/demo-11.mp4", poster: "/videos/poster-11.jpg" },
  { src: "/videos/demo-12.mp4", poster: "/videos/poster-12.jpg" },
  { src: "/videos/demo-13.mp4", poster: "/videos/poster-13.jpg" },
  { src: "/videos/demo-14.mp4", poster: "/videos/poster-14.jpg" },
];

export default function PovDemoPage() {
  return (
    <main>
      <InsidePovCarousel videos={videos} autoRotate interactive />
    </main>
  );
}
