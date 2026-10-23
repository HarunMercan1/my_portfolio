"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useLang } from "@/lib/i18n";

const noop = () => () => {};

export function ThemeToggle() {
    // false during SSR/hydration, true on the client: the theme is only known client-side.
    const mounted = useSyncExternalStore(noop, () => true, () => false);
    const { resolvedTheme, setTheme } = useTheme();
    const { t } = useLang();

    const isDark = mounted && resolvedTheme === "dark";
    const label = isDark ? t("Açık temaya geç", "Switch to light theme") : t("Koyu temaya geç", "Switch to dark theme");

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="grid place-items-center w-9 h-9 rounded-full text-fg-2 hover:text-fg hover:bg-surface-2 transition-colors"
            aria-label={label}
            title={label}
        >
            {mounted ? isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" /> : null}
        </button>
    );
}
