import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

/** Google Play–style download button. */
export function PlayButton({ href, size = "md" }: { href: string; size?: "md" | "lg" }) {
    const pad = size === "lg" ? "pl-4 pr-6 py-3" : "pl-3.5 pr-5 py-2.5";
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 rounded-2xl bg-fg text-bg ${pad} hover:opacity-90 transition-opacity`}
        >
            <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
                <path d="M4 2.8v18.4c0 .6.6 1 1.1.7l15.6-9.2c.5-.3.5-1 0-1.3L5.1 2.1C4.6 1.8 4 2.2 4 2.8Z" fill="currentColor" />
            </svg>
            <span className="text-left leading-tight">
                <span className="block text-[11px] opacity-70">Hemen indir</span>
                <span className="block text-sm font-semibold">Google Play</span>
            </span>
        </a>
    );
}

export function ButtonLink({
    href,
    children,
    variant = "primary",
}: {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "ghost";
}) {
    const styles =
        variant === "primary"
            ? "bg-coral text-on-coral hover:brightness-95"
            : "border border-line bg-surface text-fg hover:border-fg-3";
    return (
        <Link
            href={href}
            className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${styles}`}
        >
            {children}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
    );
}

/** A screenshot inside a simple phone bezel. */
export function Phone({
    src,
    alt,
    className = "",
    priority,
}: {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}) {
    return (
        <div className={`rounded-[2rem] bg-[#0c0b0a] p-[7px] shadow-phone ${className}`}>
            <Image
                src={src}
                alt={alt}
                width={500}
                height={1000}
                priority={priority}
                className="block w-full h-auto rounded-[1.6rem]"
            />
        </div>
    );
}

export function Rating({ value, reviews }: { value: string; reviews?: string }) {
    return (
        <span className="inline-flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold">{value}</span>
            {reviews && <span className="text-fg-3">({reviews} yorum)</span>}
        </span>
    );
}

export function SectionHeading({
    eyebrow,
    title,
    text,
}: {
    eyebrow: string;
    title: React.ReactNode;
    text?: string;
}) {
    return (
        <div className="max-w-2xl">
            <p className="eyebrow mb-3">{eyebrow}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
            {text && <p className="mt-4 text-fg-2 text-lg leading-relaxed">{text}</p>}
        </div>
    );
}
