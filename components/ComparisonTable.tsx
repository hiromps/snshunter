type Cell = string | boolean;

const COLS = ["SNSHunter", "Other Tools", "Agencies", "Do It Yourself"];

const ROWS: { feature: string; cells: Cell[] }[] = [
  { feature: "Searchable records", cells: ["2B+", "5M–2B", "~1K–10K", "–"] },
  { feature: "Hand-picked lists", cells: [true, false, false, false] },
  { feature: "Hours saved", cells: ["800/mo", "50/mo", "500/mo", false] },
  { feature: "AI agents", cells: [true, false, false, false] },
  { feature: "0–100 in", cells: ["10 mins", "24 hours", "4 weeks", "months"] },
  { feature: "Made for founders", cells: [true, false, false, false] },
  { feature: "Constant updates", cells: [true, "?", "?", false] },
  { feature: "Monthly cost", cells: ["from $67", "$300–2k", "$2k–20k", "800 hrs / $4k VA"] },
  { feature: "Quality creators", cells: ["1,000s/mo", "~50", "~10", "1000s of hrs"] },
];

function Mark({ v }: { v: boolean }) {
  return v ? (
    <span className="mx-auto grid h-5 w-5 place-items-center rounded-md bg-brand text-xs text-white">✓</span>
  ) : (
    <span className="mx-auto grid h-5 w-5 place-items-center rounded-md bg-neutral-100 text-xs text-neutral-400">✕</span>
  );
}

const OTHER_TOOLS = [
  "98% fashion + beauty only",
  "Built for big ecom brands",
  "10 in 10,000 creators actually relevant",
  "$499–4,999/mo for basic database access",
];
const DIY = [
  "Scroll 300+ hours",
  "Send emails one by one for weeks",
  "Hope the creator brings results",
  "Side-effects may include brain rot",
];

export default function ComparisonTable() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            Some <span className="italic">painful</span>* alternatives
          </h2>
          <p className="mt-3 text-lg text-muted">Before SNSHunter, there was pain.</p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="py-3 text-left font-medium text-muted">Top features</th>
                {COLS.map((c, i) => (
                  <th
                    key={c}
                    className={`px-3 py-3 text-center font-semibold ${i === 0 ? "text-brand" : "text-ink"}`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, ri) => (
                <tr key={r.feature} className={ri % 2 ? "bg-cream/60" : ""}>
                  <td className="py-3 pr-3 font-medium text-ink">{r.feature}</td>
                  {r.cells.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-3 py-3 text-center ${ci === 0 ? "font-semibold text-ink" : "text-muted"}`}
                    >
                      {typeof cell === "boolean" ? <Mark v={cell} /> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {[
            { title: '"Other tools out there"', items: OTHER_TOOLS },
            { title: '"I\'ll do it myself"', items: DIY },
          ].map((col) => (
            <div key={col.title} className="text-center">
              <h3 className="font-display text-2xl text-ink">{col.title}</h3>
              <ul className="mt-5 space-y-3 text-left">
                {col.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-[15px] font-medium text-ink">
                    <span className="mt-0.5 text-rose-500">✕</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
