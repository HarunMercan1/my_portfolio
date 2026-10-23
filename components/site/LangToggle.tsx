"use client";

import { useLang } from "@/lib/i18n";

export function LangToggle() {
    const { lang, setLang } = useLang();

    const next = lang === "tr" ? "en" : "tr";
    const label = lang === "tr" ? "Switch to English" : "Türkçeye geç";

    return (
        <button
            onClick={() => setLang(next)}
            className="grid place-items-center w-9 h-9 rounded-full text-xs font-bold tracking-wide text-fg-2 hover:text-fg hover:bg-surface-2 transition-colors"
            aria-label={label}
            title={label}
            lang={next}
        >
            {next.toUpperCase()}
        </button>
    );
}
