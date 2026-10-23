import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { apps, getApp } from "@/lib/apps";
import { AppDetail } from "@/components/site/AppDetail";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const app = getApp((await params).slug);
    if (!app) return {};
    return {
        title: `${app.name}: ${app.subtitle.tr}`,
        description: app.tagline.tr,
        alternates: { canonical: `/apps/${app.slug}/` },
        openGraph: { title: app.name, description: app.tagline.tr, images: [`/apps/${app.slug}/icon.png`] },
    };
}

export default async function AppPage({ params }: Props) {
    const { slug } = await params;
    if (!getApp(slug)) notFound();
    return <AppDetail slug={slug} />;
}
