"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";

/** Google Play–style download button. */
export function PlayButton({ href, size = "md" }: { href: string; size?: "md" | "lg" }) {
    const { t } = useLang();
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
                <span className="block text-[11px] opacity-70">{t("Hemen indir", "Get it on")}</span>
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
    framed,
}: {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
    /** The image already has its own device frame; skip ours. */
    framed?: boolean;
}) {
    if (framed) {
        return (
            <div className={`overflow-hidden rounded-[1.6rem] shadow-phone ${className}`}>
                <Image src={src} alt={alt} width={540} height={960} priority={priority} className="block w-full h-auto" />
            </div>
        );
    }
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
    const { t, num } = useLang();
    return (
        <span className="inline-flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="font-semibold">{num(value)}</span>
            {reviews && <span className="text-fg-3">({reviews} {t("yorum", "reviews")})</span>}
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

function ReviewCard({
    review,
    starLabel,
    hidden,
    className = "",
}: {
    review: { author: string; text: string; lang?: Lang };
    starLabel: string;
    hidden?: boolean;
    className?: string;
}) {
    return (
        <li aria-hidden={hidden} className={`flex flex-col rounded-2xl border border-line bg-surface p-5 ${className}`}>
            <div className="flex gap-0.5" aria-label={starLabel}>
                {Array.from({ length: 5 }, (_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
            </div>
            <p lang={review.lang ?? "tr"} className="mt-3 text-sm text-fg-2 leading-relaxed line-clamp-4">
                “{review.text}”
            </p>
            <p className="mt-auto pt-3 text-sm font-semibold">{review.author}</p>
        </li>
    );
}

/** Strip of 5-star reviews: responsive grid for short lists, auto-scrolling marquee for 5+. */
export function ReviewMarquee({
    reviews,
    contained,
}: {
    reviews: { author: string; text: string; lang?: Lang }[];
    contained?: boolean;
}) {
    const { t } = useLang();
    const starLabel = t("5 yıldız", "5 stars");

    if (reviews.length < 5) {
        return (
            <ul className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${contained ? "container-page" : "px-7 md:px-10"}`}>
                {reviews.map((r, i) => (
                    <ReviewCard key={i} review={r} starLabel={starLabel} />
                ))}
            </ul>
        );
    }

    return (
        <div className="marquee overflow-hidden">
            <ul className="marquee-track flex w-max gap-4">
                {[...reviews, ...reviews].map((r, i) => (
                    <ReviewCard
                        key={i}
                        review={r}
                        starLabel={starLabel}
                        hidden={i >= reviews.length || undefined}
                        className="w-[300px] shrink-0"
                    />
                ))}
            </ul>
        </div>
    );
}
