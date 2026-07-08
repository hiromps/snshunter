import CtaButton from "./CtaButton";

export default function SiteFooter() {
  return (
    <footer className="bg-night px-6 py-14 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 sm:flex-row">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-white/10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 3l16 9-16 9V3z" fill="#0bd57e" />
              </svg>
            </span>
            <span className="font-display text-xl">SNSHunter</span>
          </div>
          <p className="mt-4 text-sm text-white/50">
            Copyright © 2026 SNSHunter
            <br />
            All rights reserved.
          </p>
          <div className="mt-4 flex gap-5 text-sm text-white/70">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <div className="mt-5 flex gap-3 text-white/60">
            <a href="#" aria-label="X" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-white/10">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
              </svg>
            </a>
            <a href="#" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 hover:bg-white/10">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
            </a>
          </div>
        </div>
        <CtaButton size="lg" />
      </div>
    </footer>
  );
}
