import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { apps } from "@/lib/apps";
import { getLegalApp, type Lang, type LegalKind } from "@/lib/legal";
import { LegalArticle } from "./LegalArticle";

function readLegal(slug: string, kind: LegalKind, lang: Lang) {
    return fs.readFileSync(path.join(process.cwd(), "content", "legal", slug, `${kind}.${lang}.html`), "utf8");
}

export function LegalPage({ slug, kind }: { slug: string; kind: LegalKind }) {
    const app = getLegalApp(slug);
    const langs = app?.docs[kind];
    if (!app || !langs) notFound();

    const docs = langs.map((lang) => ({ lang, html: readLegal(slug, kind, lang) }));
    // Apps in closed testing have no public page yet, so link back home instead.
    const isLive = apps.some((a) => a.slug === slug);

    return <LegalArticle appName={app.name} kind={kind} docs={docs} backHref={isLive ? `/apps/${slug}/` : undefined} />;
}
