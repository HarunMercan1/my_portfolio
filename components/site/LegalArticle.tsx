"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { legalTitles, type Lang, type LegalKind } from "@/lib/legal";

const labels: Record<Lang, string> = { tr: "Türkçe", en: "English" };

/**
 * Shows one language of a legal text at a time; no tabs when there is only one.
 * Opens in the site language when that text exists.
 */
export function LegalArticle({
    appName,
    kind,
    docs,
    backHref,
}: {
    appName: string;
    kind: LegalKind;
    docs: { lang: Lang; html: string }[];
    /** The app's page; home when the app has none yet. */
    backHref?: string;
}) {
    const { lang, t } = useLang();
    const [picked, setPicked] = useState<Lang | null>(null);
    const doc = docs.find((d) => d.lang === (picked ?? lang)) ?? docs[0];

    return (
        <article className="container-page max-w-3xl py-12 md:py-20">
            <Link href={backHref ?? "/"} className="inline-flex items-center gap-1.5 text-sm text-fg-2 hover:text-fg">
                <ArrowLeft className="w-4 h-4" /> {backHref ? appName : t("Ana sayfa", "Home")}
            </Link>

            <header className="mt-8 border-b border-line pb-8">
                <p className="eyebrow mb-3">{legalTitles[kind][doc.lang]}</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{appName}</h1>
            </header>

            {docs.length > 1 && (
                <div role="tablist" className="mt-8 inline-flex rounded-full border border-line bg-surface p-1">
                    {docs.map((d) => (
                        <button
                            key={d.lang}
                            role="tab"
                            aria-selected={d.lang === doc.lang}
                            onClick={() => setPicked(d.lang)}
                            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                d.lang === doc.lang ? "bg-fg text-bg" : "text-fg-2 hover:text-fg"
                            }`}
                        >
                            {labels[d.lang]}
                        </button>
                    ))}
                </div>
            )}
            <div className="prose-page mt-6" lang={doc.lang} dangerouslySetInnerHTML={{ __html: doc.html }} />
        </article>
    );
}
