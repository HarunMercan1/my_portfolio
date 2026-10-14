"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const links = [
    { href: "/#apps", label: "Uygulamalar" },
    { href: "/#about", label: "Hakkında" },
    { href: "/#contact", label: "İletişim" },
];

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
            <nav className="container-page flex h-16 items-center justify-between">
                <Logo />

                <div className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-3.5 py-2 rounded-full text-sm font-medium text-fg-2 hover:text-fg hover:bg-surface-2 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="ml-2">
                        <ThemeToggle />
                    </div>
                </div>

                <div className="flex md:hidden items-center gap-1">
                    <ThemeToggle />
                    <button
                        onClick={() => setOpen(!open)}
                        className="grid place-items-center w-9 h-9 rounded-full text-fg-2 hover:bg-surface-2"
                        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
                        aria-expanded={open}
                    >
                        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {open && (
                <div className="md:hidden border-t border-line bg-bg">
                    <div className="container-page flex flex-col py-3">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="py-3 text-base font-medium text-fg-2 hover:text-fg"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
