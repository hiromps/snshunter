"use client";

import { useState } from "react";

const ITEMS = [
  {
    q: "What do I actually get access to?",
    a: "A continuously growing, hand-vetted database of relevant creators plus AI agents that research and reach out to them for you — searchable by niche, platform, audience and engagement.",
  },
  {
    q: "How many creators are in there?",
    a: "Thousands of vetted profiles across 30+ niches, with hundreds of new creators added every week rather than a stale one-time dump.",
  },
  {
    q: "How does the outreach work?",
    a: "You describe your product, we match creators, and AI agents draft and send personalised outreach, follow up automatically, and hand off warm replies to you.",
  },
  {
    q: "Why don't you have 1M+ records?",
    a: "Because 990,000 of them would be irrelevant. We optimise for signal, not size — every creator is scanned by humans and AI before making the list.",
  },
  {
    q: "What niches will I find?",
    a: "AI, fitness, finance, travel, gaming, beauty, dev, business and dozens more. If your customers watch short-form video, there are creators here for you.",
  },
  {
    q: "Why use agents for creator marketing?",
    a: "Finding, researching and messaging creators is repetitive, high-volume work. Agents do it 24/7 without burning out — so you get results in minutes, not months.",
  },
  {
    q: "Is creator marketing right for me?",
    a: "If you sell an app or product to consumers and want distribution that compounds, yes. A single viral video can outperform months of paid ads.",
  },
  {
    q: "What about other solutions?",
    a: "Databases go stale, agencies are expensive, and doing it yourself costs hundreds of hours. SNSHunter combines fresh data with automated outreach in one subscription.",
  },
];

function Row({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-lg font-medium text-ink">{q}</span>
        <span className="shrink-0 text-2xl leading-none text-muted transition-transform" style={{ transform: open ? "rotate(45deg)" : "none" }}>
          +
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="pb-5 pr-10 text-[15px] leading-relaxed text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-4xl text-ink sm:text-5xl">Frequently asked</h2>
        <div className="mt-8">
          {ITEMS.map((it) => (
            <Row key={it.q} q={it.q} a={it.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
