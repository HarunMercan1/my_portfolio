import Link from "next/link";

/** Coral-branch mark used in the header, footer and favicon. */
export function LogoMark({ className = "w-8 h-8" }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
            <rect width="32" height="32" rx="9" fill="var(--coral)" />
            <path
                d="M16 25v-9m0 3.5-4.5-4.5v-4m4.5 5 4.5-4.5V7.5"
                fill="none"
                stroke="var(--on-coral)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
            <LogoMark />
            <span>
                Mercan <span className="text-fg-2 font-semibold">Software</span>
            </span>
        </Link>
    );
}
