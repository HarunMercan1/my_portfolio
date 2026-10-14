import type { Metadata } from "next";
import { getLegalApp, legalParams } from "@/lib/legal";
import { LegalPage } from "@/components/site/LegalPage";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return legalParams("delete-account");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const app = getLegalApp((await params).slug);
    if (!app) return {};
    return {
        title: `${app.name} Hesap Silme`,
        description: `${app.name} hesabını ve verilerini silme adımları.`,
        alternates: { canonical: `/apps/${app.slug}/delete-account/` },
    };
}

export default async function DeleteAccountPage({ params }: Props) {
    return <LegalPage slug={(await params).slug} kind="delete-account" />;
}
