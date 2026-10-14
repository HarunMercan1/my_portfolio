import type { Metadata } from "next";
import { getLegalApp, legalParams } from "@/lib/legal";
import { LegalPage } from "@/components/site/LegalPage";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return legalParams("privacy");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const app = getLegalApp((await params).slug);
    if (!app) return {};
    return {
        title: `${app.name} Gizlilik Politikası`,
        description: `Mercan Software tarafından geliştirilen ${app.name} uygulamasının gizlilik politikası.`,
        alternates: { canonical: `/apps/${app.slug}/privacy/` },
    };
}

export default async function PrivacyPage({ params }: Props) {
    return <LegalPage slug={(await params).slug} kind="privacy" />;
}
