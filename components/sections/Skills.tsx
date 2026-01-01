"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import {
    Code2,
    Smartphone,
    Terminal,
    Zap
} from "lucide-react";

interface Skill {
    name: string;
    level: number; // 0-100
    color: string;
}

interface SkillCategory {
    title: string;
    icon: React.ElementType;
    skills: Skill[];
    gradient: string;
}

const skillCategories: SkillCategory[] = [
    {
        title: "Mobile Development",
        icon: Smartphone,
        gradient: "from-blue-500 to-cyan-500",
        skills: [
            { name: "Flutter", level: 75, color: "#02569B" },
            { name: "Dart", level: 75, color: "#0175C2" },
            { name: "Supabase", level: 70, color: "#3ECF8E" },
        ],
    },
    {
        title: "Programlama Dilleri",
        icon: Code2,
        gradient: "from-purple-500 to-pink-500",
        skills: [
            { name: "Java", level: 50, color: "#ED8B00" },
            { name: "Python", level: 45, color: "#3776AB" },
            { name: "C/C++", level: 40, color: "#00599C" },
            { name: "C#", level: 40, color: "#239120" },
        ],
    },
    {
        title: "Araçlar & Teknolojiler",
        icon: Terminal,
        gradient: "from-green-500 to-emerald-500",
        skills: [
            { name: "Git & GitHub", level: 90, color: "#F05032" },
            { name: "VS Code", level: 80, color: "#007ACC" },
            { name: "Android Studio", level: 70, color: "#3DDC84" },
        ],
    },
];

import {
    SiFlutter,
    SiDart,
    SiSupabase,
    SiPython,
    SiCplusplus,
    SiGit,
    SiGithub,
    SiAndroidstudio,
    SiFirebase,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { TbBrandCSharp } from "react-icons/tb";

interface TechLogo {
    name: string;
    icon: React.ElementType;
    color: string;
}

const technologies: TechLogo[] = [
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Dart", icon: SiDart, color: "#0175C2" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "C#", icon: TbBrandCSharp, color: "#239120" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    { name: "VS Code", icon: VscCode, color: "#007ACC" },
    { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-sm">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span className="text-text-muted">{skill.level}%</span>
            </div>
            <div className="h-2 bg-background rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                />
            </div>
        </div>
    );
}

export function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">
                            Yetenekler
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Teknik{" "}
                            <span className="gradient-text">Becerilerim</span>
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Modern teknolojilerle çalışarak, performanslı ve ölçeklenebilir uygulamalar geliştiriyorum
                        </p>
                    </div>
                </FadeIn>

                {/* Skill Categories Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-surface border border-border 
                                       hover:border-primary/50 transition-all duration-300 group"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} 
                                                 group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                            </div>

                            {/* Skills */}
                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillBar
                                        key={skill.name}
                                        skill={skill}
                                        delay={categoryIndex * 0.1 + skillIndex * 0.05}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Logos */}
                <FadeIn delay={0.4}>
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 mb-8">
                            <Zap className="w-5 h-5 text-primary" />
                            <span className="text-text-secondary">Kullandığım Teknolojiler</span>
                        </div>
                        <StaggerContainer delay={0.6} staggerDelay={0.08} className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                            {technologies.map((tech) => (
                                <StaggerItem key={tech.name}>
                                    <motion.div
                                        whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="group flex flex-col items-center gap-2 cursor-pointer"
                                    >
                                        <div
                                            className="p-4 rounded-2xl bg-surface border border-border 
                                                       group-hover:border-primary/50 transition-all duration-300
                                                       group-hover:shadow-lg"
                                            style={{
                                                boxShadow: 'none',
                                            }}
                                        >
                                            <tech.icon
                                                className="w-8 h-8 transition-colors duration-300"
                                                style={{ color: tech.color }}
                                            />
                                        </div>
                                        <span className="text-xs text-text-muted group-hover:text-text-secondary transition-colors">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
