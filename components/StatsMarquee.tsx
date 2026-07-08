import { AvatarStack } from "./Avatar";

const STATS = [
  { n: "800+", l: "Hours saved per week" },
  { n: "532k", l: "Emails sent" },
  { n: "42M", l: "Views generated" },
];

const CARDS = [
  { emoji: "📣", cat: "Marketing", add: 86, ago: "3 days ago" },
  { emoji: "💼", cat: "Business", add: 101, ago: "6 days ago" },
  { emoji: "📚", cat: "Student", add: 152, ago: "7 days ago" },
  { emoji: "🤖", cat: "AI", add: 305, ago: "2 days ago" },
  { emoji: "🛠️", cat: "Productivity", add: 100, ago: "8 days ago" },
  { emoji: "₿", cat: "Crypto", add: 45, ago: "6 days ago" },
  { emoji: "💪", cat: "Fitness", add: 352, ago: "6 days ago" },
  { emoji: "👨‍💻", cat: "Dev", add: 92, ago: "5 days ago" },
  { emoji: "✈️", cat: "Travel", add: 56, ago: "6 days ago" },
  { emoji: "📊", cat: "Finance", add: 63, ago: "3 days ago" },
  { emoji: "🏢", cat: "Corporate", add: 72, ago: "9 days ago" },
];

function Card({ c, i }: { c: (typeof CARDS)[number]; i: number }) {
  return (
    <div className="flex w-64 shrink-0 items-center justify-between rounded-2xl bg-night-2 px-4 py-3 text-white ring-1 ring-white/10">
      <div className="flex items-center gap-2">
        <AvatarStack count={3} size={28} start={i} />
        <span className="text-sm font-semibold">+{c.add}</span>
      </div>
      <div className="text-right">
        <span className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-xs font-medium">
          <span aria-hidden>{c.emoji}</span>
          {c.cat}
        </span>
        <p className="mt-1 text-[10px] text-white/40">{c.ago}</p>
      </div>
    </div>
  );
}

export default function StatsMarquee() {
  const loop = [...CARDS, ...CARDS];
  return (
    <section className="bg-white py-16">
      <div className="mx-auto mb-12 grid max-w-3xl grid-cols-3 gap-6 px-6 text-center">
        {STATS.map((s) => (
          <div key={s.l}>
            <p className="font-display text-4xl text-ink sm:text-5xl">{s.n}</p>
            <p className="mt-1 text-sm text-muted">{s.l}</p>
          </div>
        ))}
      </div>

      <div className="group relative overflow-hidden">
        <div className="flex w-max gap-3 animate-marquee pause-on-hover">
          {loop.map((c, i) => (
            <Card key={i} c={c} i={i} />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
