import CreatorTable from "./CreatorTable";

const STEPS = [
  { icon: "◎", label: "Find" },
  { icon: "➤", label: "Outreach" },
  { icon: "✉", label: "Follow-Up" },
  { icon: "✓", label: "Onboard" },
];

const ROWS = [
  { handle: "wandermaya", match: 53, followers: "76.8K", engagement: "22.0%", cats: ["Travel"], bio: "solo travel life, 40 countries and counting" },
  { handle: "globegwen", match: 53, followers: "67.0K", engagement: "18.9%", cats: ["Travel"], bio: "experiencing the world · trips & tips" },
  { handle: "bonvoyagebo", match: 52, followers: "129K", engagement: "21.0%", cats: ["Travel"], bio: "24, brb seeing the world" },
  { handle: "packlightpau", match: 52, followers: "141K", engagement: "9.0%", cats: ["Travel", "Student"], bio: "budget backpacker & digital nomad" },
  { handle: "nomadnina", match: 52, followers: "54.2K", engagement: "6.0%", cats: ["Travel"], bio: "surf + yoga lifestyle on the road" },
];

export default function Workflow() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {STEPS.map((s) => (
            <span
              key={s.label}
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-5 py-2.5 font-display text-2xl text-ink shadow-sm"
            >
              <span className="text-lg">{s.icon}</span>
              {s.label}
            </span>
          ))}
        </div>

        <div className="mt-10 grid items-start gap-6 md:grid-cols-[240px_1fr]">
          <div className="space-y-1">
            {[
              { t: "Creator Database", active: true },
              { t: "AI Lists", active: false },
              { t: "Auto Outreach", active: false },
            ].map((m) => (
              <div
                key={m.t}
                className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm ${
                  m.active ? "bg-cream font-semibold text-ink" : "text-muted"
                }`}
              >
                {m.active && <span className="text-brand">→</span>}
                {m.t}
              </div>
            ))}
          </div>
          <CreatorTable
            title="TravelBFF"
            count="806"
            filters={["Travel", "Student"]}
            rows={ROWS}
          />
        </div>
      </div>
    </section>
  );
}
