"use client";

import { useState } from "react";
import type { Lang } from "@/lib/legal";

const labels: Record<Lang, string> = { tr: "Türkçe", en: "English" };

/** Shows one language of a legal text at a time; no tabs when there is only one. */
export function LangTabs({ docs }: { docs: { lang: Lang; html: string }[] }) {
    const [active, setActive] = useState(docs[0].lang);
    const doc = docs.find((d) => d.lang === active) ?? docs[0];

    return (
        <>
            {docs.length > 1 && (
                <div role="tablist" className="mt-8 inline-flex rounded-full border border-line bg-surface p-1">
                    {docs.map((d) => (
                        <button
                            key={d.lang}
                            role="tab"
                            aria-selected={d.lang === active}
                            onClick={() => setActive(d.lang)}
                            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                d.lang === active ? "bg-fg text-bg" : "text-fg-2 hover:text-fg"
                            }`}
                        >
                            {labels[d.lang]}
                        </button>
                    ))}
                </div>
            )}
            <div className="prose-page mt-6" lang={doc.lang} dangerouslySetInnerHTML={{ __html: doc.html }} />
        </>
    );
}
