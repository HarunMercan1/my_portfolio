import { ButtonLink } from "@/components/site/ui";

export default function NotFound() {
    return (
        <section className="container-page py-28 text-center">
            <p className="eyebrow">404</p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">Bu sayfa bulunamadı</h1>
            <p className="mt-4 text-fg-2">Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.</p>
            <div className="mt-8">
                <ButtonLink href="/">Ana sayfaya dön</ButtonLink>
            </div>
        </section>
    );
}
