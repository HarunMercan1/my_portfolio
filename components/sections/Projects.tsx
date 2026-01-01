"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import {
    ExternalLink,
    Github,
    Smartphone,
    Globe,
    Layers,
    Star
} from "lucide-react";

type ProjectCategory = "all" | "web" | "mobile" | "fullstack";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: ProjectCategory[];
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Pomodoro Elite",
        description: "Zamanınızı yönetmenin en elit yolu. Tamamen ücretsiz, basit, hızlı ve modern bir Pomodoro timer uygulaması. İstatistikler, temalar ve hatırlatıcılar ile verimlilik odaklı tasarım.",
        image: "/projects/pomodoro-elite.jpg",
        category: ["mobile"],
        technologies: ["Flutter", "Dart", "Supabase", "Riverpod"],
        liveUrl: "https://play.google.com/store/apps/details?id=com.mercansoftware.pomodoro_elite",
        featured: true,
    },
    {
        id: 2,
        title: "Yakında Geliyor",
        description: "Yeni bir mobil uygulama üzerinde çalışıyorum. Detaylar çok yakında!",
        image: "/projects/coming-soon.jpg",
        category: ["mobile"],
        technologies: ["Flutter", "Dart", "Supabase"],
    },
];

const categories = [
    { id: "all" as const, label: "Tümü", icon: Layers },
    { id: "web" as const, label: "Web", icon: Globe },
    { id: "mobile" as const, label: "Mobil", icon: Smartphone },
    { id: "fullstack" as const, label: "Full Stack", icon: Layers },
];

function ProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -8 }}
            className="group relative bg-surface rounded-2xl border border-border 
                       overflow-hidden hover:border-primary/50 transition-all duration-300"
        >
            {/* Featured Badge */}
            {project.featured && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2 py-1 
                               bg-primary/90 rounded-full text-xs text-white font-medium">
                    <Star className="w-3 h-3 fill-current" />
                    Öne Çıkan
                </div>
            )}

            {/* Image Placeholder */}
            <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 
                           flex items-center justify-center overflow-hidden">
                <div className="text-center">
                    <div className="text-4xl mb-2">
                        {project.category.includes("mobile") ? "📱" : "🌐"}
                    </div>
                    <span className="text-text-muted text-sm">Proje Görseli</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300
                               flex items-end justify-center pb-4">
                    <div className="flex gap-3">
                        {project.liveUrl && (
                            <motion.a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 bg-primary rounded-lg text-white"
                            >
                                <ExternalLink className="w-5 h-5" />
                            </motion.a>
                        )}
                        {project.githubUrl && (
                            <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 bg-surface border border-border rounded-lg hover:border-primary"
                            >
                                <Github className="w-5 h-5" />
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 bg-background text-xs text-text-muted rounded-md border border-border"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export function Projects() {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

    const filteredProjects = projects.filter(
        (project) =>
            activeCategory === "all" || project.category.includes(activeCategory)
    );

    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-12">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">
                            Projeler
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Son{" "}
                            <span className="gradient-text">Çalışmalarım</span>
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Geliştirdiğim web ve mobil projelerden bazıları
                        </p>
                    </div>
                </FadeIn>

                {/* Category Filter */}
                <FadeIn delay={0.2}>
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium
                                           transition-all duration-300 ${activeCategory === category.id
                                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                                        : "bg-background border border-border text-text-secondary hover:border-primary hover:text-primary"
                                    }`}
                            >
                                <category.icon className="w-4 h-4" />
                                {category.label}
                            </motion.button>
                        ))}
                    </div>
                </FadeIn>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View More */}
                <FadeIn delay={0.6}>
                    <div className="text-center mt-12">
                        <motion.a
                            href="https://github.com/HarunMercan1"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border
                                       rounded-full text-text-secondary hover:border-primary hover:text-primary
                                       transition-all duration-300"
                        >
                            <Github className="w-5 h-5" />
                            GitHub&apos;da Daha Fazla
                        </motion.a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
