const LOGOS = [
  { name: "trailblazer", sub: "marketing" },
  { name: "delta" },
  { name: "HeyGen" },
  { name: "serif" },
  { name: "leadbeam" },
];

export default function LogoCloud() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-display text-lg text-muted">
          used by teams for creator-marketing at scale
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale">
          {LOGOS.map((l) => (
            <span key={l.name} className="flex items-baseline gap-1 text-2xl font-bold tracking-tight text-ink">
              {l.name}
              {l.sub && <span className="text-xs font-medium text-muted">{l.sub}</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
