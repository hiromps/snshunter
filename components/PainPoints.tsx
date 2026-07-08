const CHIPS = [
  { emoji: "😌", label: "Stop the endless scrolling" },
  { emoji: "🔥", label: "Fire your agency" },
  { emoji: "📧", label: "Skip the email threads" },
  { emoji: "🗃️", label: "Drop stale databases" },
];

export default function PainPoints() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Your endless hunt for creators ends here
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {CHIPS.map((c) => (
            <span
              key={c.label}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-cream px-5 py-3 text-[15px] font-medium text-ink shadow-sm"
            >
              <span aria-hidden>{c.emoji}</span>
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
