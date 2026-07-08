import Countdown from "./Countdown";

const NICHES = [
  ["🤖", "AI"], ["⚡", "Productivity"], ["💪", "Fitness"], ["💻", "Tech"],
  ["🎥", "Content"], ["🥗", "Nutrition"], ["📣", "Marketing"], ["₿", "Crypto"],
  ["❤️", "Relationships"], ["⚖️", "Law"], ["📊", "Finance"], ["🛍️", "Ecom"],
  ["✈️", "Travel"], ["👨‍💻", "Developer"], ["⭐", "Lifestyle"], ["🏢", "Corporate"],
  ["💼", "Career"], ["🤝", "Business"], ["📈", "Trading"], ["👾", "Gaming"],
  ["🍼", "Parenting"], ["♊", "Astrology"], ["🏡", "Home"], ["✝️", "Christian"],
  ["🗣️", "Language"], ["📚", "Books"], ["💄", "Beauty"], ["🎨", "Design"],
  ["🏠", "Real Estate"], ["🎬", "Editing"], ["👗", "Fashion"], ["🎵", "Music"],
  ["🌱", "Self Growth"],
];

const THUMB_GRADS = [
  "linear-gradient(160deg,#3b2f63,#8b5cf6)",
  "linear-gradient(160deg,#1f2937,#4b5563)",
  "linear-gradient(160deg,#7c2d12,#ea580c)",
  "linear-gradient(160deg,#0f766e,#2dd4bf)",
  "linear-gradient(160deg,#831843,#db2777)",
  "linear-gradient(160deg,#1e3a8a,#3b82f6)",
  "linear-gradient(160deg,#3f3f46,#a1a1aa)",
  "linear-gradient(160deg,#422006,#d97706)",
];

function ThumbRow({ offset, reverse }: { offset: number; reverse?: boolean }) {
  const items = Array.from({ length: 12 });
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-3 ${reverse ? "animate-marquee-slow" : "animate-marquee"}`}
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {[...items, ...items].map((_, i) => (
          <div
            key={i}
            className="h-40 w-28 shrink-0 rounded-xl ring-1 ring-white/10"
            style={{ background: THUMB_GRADS[(i + offset) % THUMB_GRADS.length] }}
          />
        ))}
      </div>
    </div>
  );
}

export default function NicheExplorer() {
  return (
    <section id="niches" className="bg-night py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-4xl sm:text-5xl md:text-6xl">
          Find creators in your <span className="italic text-brand">niche</span>, tonight
        </h2>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {[
            ["active", "border-amber-400/50 text-amber-300"],
            ["transcribed", "border-orange-400/50 text-orange-300"],
            ["liked by algo", "border-yellow-400/50 text-yellow-300"],
            ["Purple Hair", "border-white/20 text-white/50"],
          ].map(([t, c]) => (
            <span key={t} className={`rounded-full border px-3 py-1 text-xs font-medium ${c}`}>
              {t}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-6">
          {NICHES.map(([emoji, label]) => (
            <span
              key={label}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2.5 text-sm font-medium"
            >
              <span aria-hidden>{emoji}</span>
              <span className="truncate">{label}</span>
            </span>
          ))}
        </div>

        <div className="mt-12 space-y-3">
          <ThumbRow offset={0} />
          <ThumbRow offset={3} reverse />
          <ThumbRow offset={6} />
        </div>

        <div className="mt-14 grid max-w-lg mx-auto grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center">
            <p className="font-display text-3xl">5.1M+</p>
            <p className="mt-1 text-sm text-white/50">Profiles scanned</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-center">
            <p className="font-display text-3xl">20,000+</p>
            <p className="mt-1 text-sm text-white/50">Accepted so far</p>
          </div>
        </div>

        <div className="mt-6">
          <Countdown />
        </div>
      </div>
    </section>
  );
}
