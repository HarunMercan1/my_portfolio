"use client";

import { motion } from "framer-motion";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Code2, Coffee, Lightbulb, Rocket, GraduationCap, MapPin } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        label: "Kod Satırı",
        value: "10K+",
    },
    {
        icon: Coffee,
        label: "Kahve",
        value: "∞",
    },
    {
        icon: Rocket,
        label: "Proje",
        value: "5+",
    },
    {
        icon: Lightbulb,
        label: "Fikir",
        value: "∞",
    },
];

const personalInfo = [
    { icon: GraduationCap, text: "Gazi Üniversitesi - Bilgisayar Mühendisliği" },
    { icon: MapPin, text: "Ankara, Türkiye" },
];

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Gradient transition from Hero */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-transparent pointer-events-none" />

            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">
                            Hakkımda
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Merhaba, Ben{" "}
                            <span className="gradient-text">Harun</span>
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Yazılım geliştirmeye tutkuyla bağlı bir bilgisayar mühendisi
                        </p>
                    </div>
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Photo & Info */}
                    <SlideIn direction="left">
                        <div className="relative">
                            {/* Profile Image Container */}
                            <motion.div
                                className="relative w-72 h-72 md:w-80 md:h-80 mx-auto"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Animated border */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary animate-pulse-glow opacity-50" />

                                {/* Image placeholder with gradient */}
                                <div className="absolute inset-1 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                                    <div className="text-center">
                                        <div className="w-32 h-32 rounded-full bg-surface/50 mx-auto mb-4 flex items-center justify-center border-2 border-border">
                                            <span className="text-4xl">👨‍💻</span>
                                        </div>
                                        <span className="text-text-muted text-sm">Fotoğraf yakında eklenecek</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Info badges */}
                            <div className="flex flex-wrap justify-center gap-3 mt-6">
                                {personalInfo.map((info, index) => (
                                    <motion.div
                                        key={info.text}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border"
                                    >
                                        <info.icon className="w-4 h-4 text-primary" />
                                        <span className="text-sm text-text-secondary">{info.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </SlideIn>

                    {/* Right: Bio & Stats */}
                    <SlideIn direction="right">
                        <div className="space-y-6">
                            {/* Bio */}
                            <div className="space-y-4">
                                <p className="text-lg text-foreground leading-relaxed">
                                    Merhaba! Ben <span className="text-primary font-semibold">Harun Reşit Mercan</span>,
                                    Gazi Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisiyim.
                                    Mobil uygulama geliştirme tutkusuyla Flutter ve modern teknolojiler
                                    kullanarak kullanıcı odaklı çözümler üretiyorum.
                                </p>
                                <p className="text-text-secondary leading-relaxed">
                                    Flutter, Dart ve Supabase gibi modern teknolojilerle çalışarak,
                                    performanslı ve kullanıcı dostu mobil uygulamalar geliştiriyorum.
                                    Play Store&apos;da yayında olan uygulamalarım bulunmaktadır.
                                </p>
                                <p className="text-text-secondary leading-relaxed">
                                    Boş zamanlarımda yeni teknolojileri keşfediyor,
                                    projeler geliştiriyor ve sürekli öğrenmeye devam ediyorum.
                                </p>
                            </div>

                            {/* Stats Grid */}
                            <StaggerContainer delay={0.8} staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                                {highlights.map((item) => (
                                    <StaggerItem key={item.label}>
                                        <motion.div
                                            whileHover={{ y: -5, scale: 1.02 }}
                                            className="p-4 rounded-xl bg-background border border-border text-center
                                                       hover:border-primary transition-all duration-300 group"
                                        >
                                            <item.icon className="w-6 h-6 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                                            <div className="text-2xl font-bold gradient-text">{item.value}</div>
                                            <div className="text-xs text-text-muted mt-1">{item.label}</div>
                                        </motion.div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </SlideIn>
                </div>
            </div>
        </section>
    );
}
