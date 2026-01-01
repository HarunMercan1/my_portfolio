"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
    { name: "Ana Sayfa", href: "#" },
    { name: "Hakkımda", href: "#about" },
    { name: "Yetenekler", href: "#skills" },
    { name: "Projeler", href: "#projects" },
    { name: "Eğitim", href: "#experience" },
    { name: "Blog", href: "#blog" },
    { name: "İletişim", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "glass border-b border-border shadow-md"
                    : "bg-transparent"
                    }`}
            >
                <nav className="section-container flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05 }}
                        className="text-xl md:text-2xl font-bold"
                    >
                        <span className="gradient-text">HRM</span>
                        <span className="text-text-muted">.</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                whileHover={{ y: -2 }}
                                className="px-4 py-2 text-sm font-medium text-text-secondary 
                           hover:text-primary transition-colors duration-300 rounded-lg
                           hover:bg-surface/50"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Right side - Theme Toggle & Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg bg-surface border border-border
                         hover:border-primary transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 left-0 right-0 z-40 glass border-b border-border md:hidden"
                    >
                        <nav className="section-container py-4">
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="px-4 py-3 text-text-secondary hover:text-primary 
                               hover:bg-surface/50 rounded-lg transition-colors"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
