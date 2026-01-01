"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="p-2 rounded-lg bg-surface border border-border"
                aria-label="Toggle theme"
            >
                <div className="w-5 h-5" />
            </button>
        );
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const isDark = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-surface border border-border hover:border-primary 
                 transition-all duration-300 glow-hover group"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <span className="text-text-secondary group-hover:text-primary transition-colors">
                {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </span>
        </button>
    );
}
