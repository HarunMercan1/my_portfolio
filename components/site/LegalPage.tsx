import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { apps } from "@/lib/apps";
import { getLegalApp, legalTitles, readLegal, type LegalKind } from "@/lib/legal";
import { LangTabs } from "./LangTabs";

export function LegalPage({ slug, kind }: { slug: string; kind: LegalKind }) {
    const app = getLegalApp(slug);
    const langs = app?.docs[kind];
    if (!app || !langs) notFound();

    const docs = langs.map((lang) => ({ lang, html: readLegal(slug, kind, lang) }));
    // Apps in closed testing have no public page yet, so link back home instead.
    const isLive = apps.some((a) => a.slug === slug);

    return (
        <article className="container-page max-w-3xl py-12 md:py-20">
            <Link
                href={isLive ? `/apps/${slug}/` : "/"}
                className="inline-flex items-center gap-1.5 text-sm text-fg-2 hover:text-fg"
            >
                <ArrowLeft className="w-4 h-4" /> {isLive ? app.name : "Ana sayfa"}
            </Link>

            <header className="mt-8 border-b border-line pb-8">
                <p className="eyebrow mb-3">{legalTitles[kind][langs[0]]}</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{app.name}</h1>
            </header>

            <LangTabs docs={docs} />
        </article>
    );
}
