import Link from "next/link";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-line bg-surface">
            <div className="container-page py-12 grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <div className="space-y-3">
                    <Logo />
                    <p className="text-sm text-fg-2 max-w-xs leading-relaxed">
                        Sade, hızlı ve özenle yapılmış mobil uygulamalar.
                    </p>
                </div>

                <FooterColumn title="Uygulamalar">
                    {apps.map((app) => (
                        <FooterLink key={app.slug} href={`/apps/${app.slug}/`}>
                            {app.name}
                        </FooterLink>
                    ))}
                </FooterColumn>

                <FooterColumn title="Gizlilik">
                    {apps.map((app) => (
                        <FooterLink key={app.slug} href={`/apps/${app.slug}/privacy/`}>
                            {app.name} Gizlilik
                        </FooterLink>
                    ))}
                </FooterColumn>

                <FooterColumn title="Bağlantılar">
                    <FooterLink href={`mailto:${site.supportEmail}`}>E-posta</FooterLink>
                    {site.socials.map((s) => (
                        <FooterLink key={s.name} href={s.url} external>
                            {s.name}
                        </FooterLink>
                    ))}
                </FooterColumn>
            </div>

            <div className="border-t border-line">
                <p className="container-page py-5 text-xs text-fg-3">
                    © {year} {site.name} · {site.founder}. Tüm hakları saklıdır.
                </p>
            </div>
        </footer>
    );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h3 className="text-sm font-semibold mb-3">{title}</h3>
            <ul className="space-y-2">{children}</ul>
        </div>
    );
}

function FooterLink({ href, external, children }: { href: string; external?: boolean; children: React.ReactNode }) {
    const className = "text-sm text-fg-2 hover:text-coral-strong transition-colors";
    return (
        <li>
            {external || href.startsWith("mailto:") ? (
                <a href={href} className={className} {...(external && { target: "_blank", rel: "noopener noreferrer" })}>
                    {children}
                </a>
            ) : (
                <Link href={href} className={className}>
                    {children}
                </Link>
            )}
        </li>
    );
}
