"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    MessageSquare,
    CheckCircle
} from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        label: "E-posta",
        value: "harunresitmercan1@gmail.com",
        href: "mailto:harunresitmercan1@gmail.com",
    },
    {
        icon: MapPin,
        label: "Konum",
        value: "Ankara, Türkiye",
        href: null,
    },
];

const socialLinks = [
    {
        name: "GitHub",
        icon: Github,
        url: "https://github.com/HarunMercan1",
        color: "hover:text-white",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        url: "https://www.linkedin.com/in/harunresitmercan",
        color: "hover:text-blue-500",
    },
];

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "fec8c11a-ab8a-429b-a398-da5c9482982b",
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    subject: `Portfolyo İletişim: ${formState.name}`,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setIsSubmitted(true);
                setFormState({ name: "", email: "", message: "" });
                setTimeout(() => setIsSubmitted(false), 5000);
            } else {
                setError("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
            }
        } catch {
            setError("Bir hata oluştu. Lütfen tekrar deneyin.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <FadeIn>
                    <div className="text-center mb-16">
                        <span className="text-primary text-sm font-medium tracking-wider uppercase mb-2 block">
                            İletişim
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Benimle{" "}
                            <span className="gradient-text">İletişime Geç</span>
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Bir projeniz mi var veya sadece merhaba demek mi istiyorsunuz? Hemen yazın!
                        </p>
                    </div>
                </FadeIn>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <FadeIn direction="left">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h3>
                                <div className="space-y-4">
                                    {contactInfo.map((info) => (
                                        <motion.div
                                            key={info.label}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border
                                                       hover:border-primary/50 transition-all duration-300 group"
                                        >
                                            <div className="p-3 rounded-xl bg-primary/10 text-primary 
                                                           group-hover:bg-primary group-hover:text-white 
                                                           transition-all duration-300">
                                                <info.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="text-text-muted text-sm">{info.label}</span>
                                                {info.href ? (
                                                    <a href={info.href} className="block font-medium hover:text-primary transition-colors">
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <span className="block font-medium">{info.value}</span>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="text-lg font-medium mb-4">Sosyal Medya</h4>
                                <div className="flex gap-3">
                                    {socialLinks.map((link) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -3 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`p-3 rounded-xl bg-surface border border-border 
                                                       hover:border-primary transition-all duration-300 ${link.color}`}
                                            aria-label={link.name}
                                        >
                                            <link.icon className="w-5 h-5" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Contact Form */}
                    <FadeIn direction="right">
                        <motion.form
                            onSubmit={handleSubmit}
                            className="p-8 rounded-2xl bg-surface border border-border"
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <MessageSquare className="w-5 h-5 text-primary" />
                                <h3 className="text-xl font-semibold">Mesaj Gönder</h3>
                            </div>

                            <div className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        İsim
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formState.name}
                                        onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border
                                                  focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                                                  transition-all duration-300"
                                        placeholder="Adınız Soyadınız"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        E-posta
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border
                                                  focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                                                  transition-all duration-300"
                                        placeholder="ornek@email.com"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Mesaj
                                    </label>
                                    <textarea
                                        id="message"
                                        value={formState.message}
                                        onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl bg-background border border-border
                                                  focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20
                                                  transition-all duration-300 resize-none"
                                        placeholder="Mesajınızı buraya yazın..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting || isSubmitted}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2
                                               transition-all duration-300 ${isSubmitted
                                            ? "bg-green-500 text-white"
                                            : "bg-primary text-white hover:shadow-lg hover:shadow-primary/30"
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                        />
                                    ) : isSubmitted ? (
                                        <>
                                            <CheckCircle className="w-5 h-5" />
                                            Gönderildi!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Gönder
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </motion.form>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
