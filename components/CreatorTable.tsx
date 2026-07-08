import { Avatar } from "./Avatar";

type Row = {
  handle: string;
  match: number;
  followers: string;
  engagement: string;
  cats: string[];
  bio: string;
};

const CAT_COLORS: Record<string, string> = {
  Travel: "bg-rose-100 text-rose-600",
  Student: "bg-sky-100 text-sky-600",
  AI: "bg-violet-100 text-violet-600",
  Developer: "bg-emerald-100 text-emerald-600",
  Productivity: "bg-amber-100 text-amber-600",
  Fitness: "bg-lime-100 text-lime-600",
};

function chip(cat: string) {
  return CAT_COLORS[cat] ?? "bg-neutral-100 text-neutral-600";
}

export default function CreatorTable({
  title,
  count,
  filters,
  rows,
  dark = false,
}: {
  title: string;
  count: string;
  filters: string[];
  rows: Row[];
  dark?: boolean;
}) {
  const shell = dark
    ? "bg-night-2 text-white ring-1 ring-white/10"
    : "bg-white text-ink ring-1 ring-line";
  const rowBorder = dark ? "border-white/10" : "border-line";
  const sub = dark ? "text-white/50" : "text-muted";

  return (
    <div className={`overflow-hidden rounded-2xl ${shell} shadow-card`}>
      {/* toolbar */}
      <div className={`flex items-center justify-between border-b ${rowBorder} px-4 py-3`}>
        <div className="flex items-center gap-3">
          <span className="font-semibold">{title}</span>
          <span className={`text-xs ${sub}`}>✦ Recalibrate</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className={`rounded-md px-2 py-1 ${dark ? "bg-white/10" : "bg-cream"}`}>⬇ Export</span>
          <span className="rounded-md bg-brand/10 px-2 py-1 font-semibold text-brand">{count}</span>
        </div>
      </div>
      {/* filters */}
      <div className={`flex items-center justify-between px-4 py-2.5 text-xs ${sub}`}>
        <div className="flex gap-2">
          {filters.map((f) => (
            <span key={f} className={`rounded-full px-2 py-0.5 font-medium ${chip(f)}`}>
              {f}
            </span>
          ))}
        </div>
        <span>Showing 1–{rows.length} of {count} creators</span>
      </div>
      {/* header */}
      <div className={`grid grid-cols-[1.4fr_.6fr_.7fr_.7fr_1fr] gap-2 border-y ${rowBorder} px-4 py-2 text-[11px] font-medium uppercase tracking-wide ${sub}`}>
        <span>Creator</span>
        <span>Match</span>
        <span>Followers</span>
        <span>Engmt</span>
        <span>Categories</span>
      </div>
      {/* rows */}
      <div>
        {rows.map((r, i) => (
          <div
            key={r.handle}
            className={`grid grid-cols-[1.4fr_.6fr_.7fr_.7fr_1fr] items-center gap-2 border-b ${rowBorder} px-4 py-2.5 text-sm ${i === rows.length - 1 ? "opacity-70" : ""}`}
          >
            <div className="flex items-center gap-2">
              <Avatar seed={i + 1} size={26} />
              <div className="min-w-0">
                <p className="truncate font-medium">{r.handle}</p>
                <p className={`truncate text-[11px] ${sub}`}>{r.bio}</p>
              </div>
            </div>
            <span className="inline-flex w-fit rounded-md bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-600">
              {r.match}%
            </span>
            <span>{r.followers}</span>
            <span>{r.engagement}</span>
            <div className="flex flex-wrap gap-1">
              {r.cats.map((c) => (
                <span key={c} className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${chip(c)}`}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
