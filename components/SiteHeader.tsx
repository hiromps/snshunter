import CtaButton from "./CtaButton";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-ink">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M4 3l16 9-16 9V3z" fill="#0bd57e" />
        </svg>
      </span>
      <span className="font-display text-xl text-ink">SNSHunter</span>
    </div>
  );
}

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-3xl items-center justify-between gap-4 rounded-full border border-line/80 bg-white/80 py-2 pl-4 pr-2 shadow-[0_8px_30px_rgba(18,16,14,0.08)] backdrop-blur-md">
        <Logo />
        <div className="hidden items-center gap-6 text-sm font-medium text-muted md:flex">
          <a href="#how" className="transition-colors hover:text-ink">
            How it works
          </a>
          <a href="#niches" className="transition-colors hover:text-ink">
            Niches
          </a>
          <a href="#faq" className="transition-colors hover:text-ink">
            FAQ
          </a>
        </div>
        <CtaButton size="sm" />
      </nav>
    </header>
  );
}
