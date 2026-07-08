import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes: Record<NonNullable<Props["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[15px]",
  lg: "px-7 py-3.5 text-lg",
};

export default function CtaButton({
  children = "Get Creators",
  href = "#get-creators",
  className = "",
  size = "md",
}: Props) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-brand font-bold text-white transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 ${sizes[size]} ${className}`}
      style={{ boxShadow: "var(--shadow-btn)" }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform group-hover:rotate-12"
        aria-hidden
      >
        <path
          d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2z"
          fill="currentColor"
        />
        <path d="M19 14l.8 2.4L22 17l-2.2.6L19 20l-.8-2.4L16 17l2.2-.6L19 14z" fill="currentColor" />
      </svg>
      {children}
    </Link>
  );
}
