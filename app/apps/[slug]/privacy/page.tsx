import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { apps, getApp } from "@/lib/apps";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const app = getApp((await params).slug);
    if (!app) return {};
    return {
        title: `${app.name} Privacy Policy`,
        description: `Privacy policy for the ${app.name} Android app by Mercan Software.`,
        alternates: { canonical: `/apps/${app.slug}/privacy/` },
    };
}

export default async function PrivacyPage({ params }: Props) {
    const app = getApp((await params).slug);
    if (!app) notFound();

    const { privacy } = app;
    const effective = new Date(privacy.effectiveDate).toLocaleDateString("tr-TR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <article className="container-page max-w-3xl py-12 md:py-20">
            <Link href={`/apps/${app.slug}/`} className="inline-flex items-center gap-1.5 text-sm text-fg-2 hover:text-fg">
                <ArrowLeft className="w-4 h-4" /> {app.name}
            </Link>

            <header className="mt-8 border-b border-line pb-8">
                <p className="eyebrow mb-3">Gizlilik Politikası</p>
                <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{app.name}</h1>
                <p className="mt-4 text-fg-2">Yürürlük tarihi: {effective}</p>
            </header>

            <div className="prose-page" lang={privacy.language}>
                {privacy.sections.map((section) => (
                    <section key={section.title}>
                        <h2>{section.title}</h2>
                        {section.body.map((block, i) =>
                            Array.isArray(block) ? (
                                <ul key={i}>
                                    {block.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p key={i}>{block}</p>
                            ),
                        )}
                    </section>
                ))}
            </div>
        </article>
    );
}
