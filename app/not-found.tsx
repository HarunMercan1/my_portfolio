"use client";

import { ButtonLink } from "@/components/site/ui";
import { useLang } from "@/lib/i18n";

export default function NotFound() {
    const { t } = useLang();
    return (
        <section className="container-page py-28 text-center">
            <p className="eyebrow">404</p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">{t("Bu sayfa bulunamadı", "Page not found")}</h1>
            <p className="mt-4 text-fg-2">{t("Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.", "The page you are looking for may have moved or never existed.")}</p>
            <div className="mt-8">
                <ButtonLink href="/">{t("Ana sayfaya dön", "Back to home")}</ButtonLink>
            </div>
        </section>
    );
}
