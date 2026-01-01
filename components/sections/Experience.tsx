"use client";

import { motion } from "framer-motion";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

interface TimelineItem {
    id: number;
    type: "work" | "education";
    title: string;
    organization: string;
    location: string;
    period: string;
    description: string;
    skills?: string[];
}

const timelineItems: TimelineItem[] = [
    {
        id: 1,
        type: "education",
        title: "Bilgisayar Mühendisliği",
        organization: "Gazi Üniversitesi",
        location: "Ankara, Türkiye",
        period: "2022 - Devam",
        description: "Bilgisayar Mühendisliği lisans eğitimi. Yazılım geliştirme, algoritmalar, veri yapıları ve mobil uygulama geliştirme üzerine çalışmalar. Şu anda 3. sınıf öğrencisiyim.",
        skills: ["Flutter", "Dart", "Supabase", "Algoritmalar"],
    },
    {
        id: 2,
        type: "education",
        title: "Fen ve Sosyal Bilimler Proje Okulu",
        organization: "Selçuklu Mahmut Sami Ramazanoğlu Anadolu İmam Hatip Lisesi",
        location: "Konya, Türkiye",
        period: "2018 - 2022",
        description: "Fen ve Sosyal Bilimler Proje okulunda lise eğitimimi tamamladım. Temel programlama ve problem çözme becerilerimi bu dönemde geliştirmeye başladım.",
        skills: ["Matematik", "Fen Bilimleri", "Proje Geliştirme"],
    },
];

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative flex items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary 
                           border-4 border-background z-10 shadow-lg shadow-primary/30" />

            {/* Content Card */}
            <motion.div
                whileHover={{ y: -5 }}
                className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] p-6 rounded-2xl bg-surface border border-border
                           hover:border-primary/50 transition-all duration-300 group`}
            >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                    <div className={`p-2 rounded-xl ${item.type === "work"
                        ? "bg-blue-500/10 text-blue-500"
                        : "bg-green-500/10 text-green-500"}`}>
                        {item.type === "work" ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-text-muted">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                    </div>
                </div>

                {/* Title & Organization */}
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-text-secondary mb-3">
                    <span>{item.organization}</span>
                    <span className="flex items-center gap-1 text-text-muted">
                        <MapPin className="w-3 h-3" /> {item.location}
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary mb-4">{item.description}</p>

                {/* Skills */}
                {item.skills && (
                    <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-2 py-1 bg-background text-xs text-text-muted rounded-md border border-border"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
}

export function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">
                            Eğitim
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Eğitim{" "}
                            <span className="gradient-text">Yolculuğum</span>
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Akademik geçmişim ve eğitim hayatım
                        </p>
                    </div>
                </FadeIn>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {timelineItems.map((item, index) => (
                            <TimelineCard key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
