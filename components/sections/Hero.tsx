"use client";

import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { Typewriter } from "@/components/animations/Typewriter";
import { motion } from "framer-motion";

// Social links configuration
const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/HarunMercan1",
        icon: Github,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harunresitmercan",
        icon: Linkedin,
    },
    {
        name: "Medium",
        url: "https://medium.com/@HarunResitMercan",
        icon: FileText,
    },
    {
        name: "Email",
        url: "mailto:harunresitmercan1@gmail.com",
        icon: Mail,
    },
];

// Rotating titles
const titles = [
    "Mobile Developer",
    "Software Engineer",
    "Flutter Developer",
];

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center gradient-mesh overflow-hidden pt-32">
            {/* Bottom gradient fade to blend with next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />

            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Floating orbs */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 10, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                        x: [0, -15, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
                />
            </div>

            {/* Main content */}
            <div className="section-container relative z-10 py-20">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Greeting */}
                    <FadeIn delay={0.2}>
                        <p className="text-text-secondary text-lg md:text-xl mb-4">
                            Merhaba, ben
                        </p>
                    </FadeIn>

                    {/* Name */}
                    <FadeIn delay={0.4}>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                            <span className="gradient-text">Harun Reşit</span>
                            <br />
                            <span className="text-foreground">Mercan</span>
                        </h1>
                    </FadeIn>

                    {/* Animated Title */}
                    <FadeIn delay={0.6}>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-text-secondary mb-8 h-12 flex items-center justify-center">
                            <Typewriter words={titles} className="font-medium" />
                        </h2>
                    </FadeIn>

                    {/* Description */}
                    <FadeIn delay={0.8}>
                        <p className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                            Mobil uygulama geliştirme tutkusuyla Flutter ve modern teknolojiler
                            kullanarak kullanıcı odaklı çözümler üretiyorum. Gazi Üniversitesi
                            Bilgisayar Mühendisliği öğrencisi olarak sürekli öğrenmeye devam ediyorum.
                        </p>
                    </FadeIn>

                    {/* CTA Buttons */}
                    <FadeIn delay={1}>
                        <div className="flex flex-wrap gap-6 justify-center mb-12">
                            {/* Primary Button - Animated Gradient */}
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 rounded-2xl font-semibold text-white
                                           overflow-hidden transition-all duration-300"
                                style={{
                                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
                                    backgroundSize: "200% 200%",
                                }}
                            >
                                {/* Animated gradient background */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        background: "linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)",
                                    }}
                                />
                                {/* Shine effect */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-30"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        background: "linear-gradient(90deg, transparent, white, transparent)",
                                    }}
                                />
                                <span className="relative flex items-center gap-2">
                                    Projelerimi Gör
                                    <ExternalLink className="w-4 h-4" />
                                </span>
                            </motion.a>

                            {/* Secondary Button - Glowing Border */}
                            <motion.a
                                href="#contact"
                                whileHover={{
                                    scale: 1.05,
                                    borderColor: "rgba(59, 130, 246, 1)",
                                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1)"
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 rounded-2xl font-semibold
                                           border-2 border-border/50 backdrop-blur-sm
                                           hover:text-primary transition-all duration-300
                                           bg-surface/30"
                            >
                                {/* Pulse ring on hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl border-2 border-primary/50 opacity-0 group-hover:opacity-100"
                                    initial={{ scale: 1 }}
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <span className="relative flex items-center gap-2">
                                    İletişime Geç
                                    <Mail className="w-4 h-4" />
                                </span>
                            </motion.a>
                        </div>
                    </FadeIn>

                    {/* Social Links */}
                    <FadeIn delay={1.2}>
                        <div className="flex justify-center gap-4">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-3 rounded-xl bg-surface border border-border 
                             hover:border-primary hover:text-primary
                             transition-colors duration-300 glow-hover"
                                    aria-label={link.name}
                                    title={link.name}
                                >
                                    <link.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div >
        </section >
    );
}
