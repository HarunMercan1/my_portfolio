import { Github, Linkedin, Mail, FileText, Heart } from "lucide-react";

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

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t border-border">
            <div className="section-container py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <a href="#" className="text-2xl font-bold">
                            <span className="gradient-text">HRM</span>
                            <span className="text-text-muted">.</span>
                        </a>
                        <p className="text-text-muted text-sm">
                            © {currentYear} Harun Reşit Mercan. Tüm hakları saklıdır.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg text-text-muted hover:text-primary 
                           hover:bg-surface transition-colors duration-300"
                                aria-label={link.name}
                            >
                                <link.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Made with love */}
                <div className="mt-8 pt-6 border-t border-border text-center">
                    <p className="text-text-muted text-sm flex items-center justify-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
