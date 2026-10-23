"use client";

import { useEffect, useSyncExternalStore } from "react";

/**
 * Site language, switched from the header like the theme. The static HTML is
 * rendered in Turkish; the client swaps to the saved (or browser) language.
 */

export type Lang = "tr" | "en";

/** A piece of text in both site languages. */
export type Localized = Record<Lang, string>;

const KEY = "lang";
const listeners = new Set<() => void>();
// Fallback for when localStorage is blocked, so the toggle still works for the visit.
let memory: Lang | null = null;

function subscribe(callback: () => void) {
    listeners.add(callback);
    window.addEventListener("storage", callback);
    return () => {
        listeners.delete(callback);
        window.removeEventListener("storage", callback);
    };
}

function getSnapshot(): Lang {
    try {
        const saved = localStorage.getItem(KEY);
        if (saved === "tr" || saved === "en") return saved;
    } catch {}
    return memory ?? (navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en");
}

const getServerSnapshot = (): Lang => "tr";

function setLang(lang: Lang) {
    memory = lang;
    try {
        localStorage.setItem(KEY, lang);
    } catch {}
    listeners.forEach((listener) => listener());
}

export function useLang() {
    const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    return {
        lang,
        setLang,
        /** Picks the string for the current language: t("Merhaba", "Hello"). */
        t: (tr: string, en: string) => (lang === "tr" ? tr : en),
        /** Store stats are written Turkish-style ("4,9", "1.000+"); swap separators for English. */
        num: (value: string) => (lang === "tr" ? value : value.replace(/[.,]/g, (c) => (c === "." ? "," : "."))),
    };
}

/** Keeps <html lang> in sync with the chosen language. */
export function HtmlLang() {
    const { lang } = useLang();
    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);
    return null;
}
