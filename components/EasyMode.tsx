import CtaButton from "./CtaButton";
import { AvatarStack } from "./Avatar";

export default function EasyMode() {
  return (
    <section id="how" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-ink px-4 py-1.5 text-sm font-semibold text-white">
            Easy Mode
          </span>
          <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl md:text-6xl">
            Do 800 hours of work in minutes
          </h2>
          <p className="mt-3 text-lg text-muted">
            Agents handle the scrolling, the research and the outreach for you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Card 1 — describe */}
          <article
            className="relative overflow-hidden rounded-3xl p-6 text-white shadow-card"
            style={{ background: "linear-gradient(135deg,#2b1a4d 0%,#7a2fb0 40%,#fb5a2d 100%)" }}
          >
            <span className="text-2xl">👋</span>
            <div className="mt-14 rounded-2xl bg-black/40 p-4 backdrop-blur">
              <p className="text-sm text-white/60">Describe your product…</p>
              <div className="mt-8 inline-block rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-ink">
                Find Creator Matches
              </div>
            </div>
            <h3 className="mt-6 text-xl font-bold">Tell us about your startup</h3>
          </article>

          {/* Card 2 — matches */}
          <article
            className="relative overflow-hidden rounded-3xl p-6 text-white shadow-card"
            style={{ background: "linear-gradient(135deg,#6d28d9,#a21caf)" }}
          >
            <span className="text-2xl">✨</span>
            <div className="mt-6 rounded-2xl bg-black/40 p-4 text-center backdrop-blur">
              <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-ink">
                156,000 profiles scanned
              </span>
              <p className="mt-3 font-display text-2xl">1,349 matches found</p>
              <div className="mt-3 flex justify-center">
                <AvatarStack count={3} size={34} start={5} />
              </div>
            </div>
            <h3 className="mt-6 text-xl font-bold">Get creators that match</h3>
            <p className="text-white/70">Hundreds delivered every week</p>
          </article>

          {/* Card 3 — outreach */}
          <article
            className="relative overflow-hidden rounded-3xl p-6 text-white shadow-card"
            style={{ background: "linear-gradient(135deg,#1e3a8a,#4338ca)" }}
          >
            <span className="text-2xl">🤖</span>
            <div className="mt-6 rounded-2xl bg-black/40 p-4 backdrop-blur">
              <p className="text-sm text-white/70">Reach ⓘ</p>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-white/80">Accounts reached</span>
                <span className="rounded-md bg-white/15 px-2 py-0.5 text-xs">127</span>
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span>Followers</span>
                  <span>81.9%</span>
                </div>
                <div className="mt-1 h-1.5 w-full rounded-full bg-white/15">
                  <div className="h-full w-4/5 rounded-full bg-white/80" />
                </div>
              </div>
            </div>
            <h3 className="mt-6 text-xl font-bold">AI agents email them for you</h3>
            <p className="text-white/70">Right up until they&apos;re onboard</p>
          </article>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton size="lg" />
        </div>
      </div>
    </section>
  );
}
