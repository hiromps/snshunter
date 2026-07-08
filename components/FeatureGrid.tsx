const FEATURES = [
  {
    icon: (
      <path d="M12 2a5 5 0 015 5v1a5 5 0 01-10 0V7a5 5 0 015-5zM4 21a8 8 0 0116 0" strokeWidth="1.6" />
    ),
    title: "Human + AI scan millions of profiles",
  },
  {
    icon: <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" strokeWidth="1.6" />,
    title: "We hand-pick the best creators for you",
  },
  {
    icon: <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" strokeWidth="1.6" />,
    title: "Get hundreds of new creators every week",
  },
  {
    icon: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeWidth="1.6" />,
    title: "Reach out & grow your creator army on autopilot",
  },
];

export default function FeatureGrid() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Not another irrelevant, API-scraped database
          </h2>
          <p className="mt-3 text-lg text-muted">
            We don&apos;t mindlessly scrape APIs — we dig out the gold.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex min-h-44 flex-col justify-between rounded-3xl border border-line bg-white p-7 shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand/20 bg-brand/5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0bd57e" aria-hidden>
                  {f.icon}
                </svg>
              </span>
              <h3 className="mt-6 text-xl font-semibold text-ink">{f.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
