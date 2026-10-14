import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    BarChart3,
    Bell,
    Cloud,
    Flame,
    Languages,
    Mail,
    Music,
    Palette,
    ShieldCheck,
    SlidersHorizontal,
    type LucideIcon,
} from "lucide-react";
import { apps, getApp, type FeatureIcon } from "@/lib/apps";
import { site } from "@/lib/site";
import { Phone, PlayButton, Rating } from "@/components/site/ui";

const featureIcons: Record<FeatureIcon, LucideIcon> = {
    palette: Palette,
    bell: Bell,
    music: Music,
    chart: BarChart3,
    flame: Flame,
    sliders: SlidersHorizontal,
    languages: Languages,
    cloud: Cloud,
};

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return apps.map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const app = getApp((await params).slug);
    if (!app) return {};
    return {
        title: `${app.name}: ${app.subtitle}`,
        description: app.tagline,
        alternates: { canonical: `/apps/${app.slug}/` },
        openGraph: { title: app.name, description: app.tagline, images: [`/apps/${app.slug}/icon.png`] },
    };
}

export default async function AppPage({ params }: Props) {
    const app = getApp((await params).slug);
    if (!app) notFound();

    return (
        <>
            <section className="border-b border-line">
                <div className="container-page py-10 md:py-16">
                    <Link href="/#apps" className="inline-flex items-center gap-1.5 text-sm text-fg-2 hover:text-fg">
                        <ArrowLeft className="w-4 h-4" /> Tüm uygulamalar
                    </Link>

                    <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:items-center">
                        <Image
                            src={`/apps/${app.slug}/icon.png`}
                            alt={`${app.name} simgesi`}
                            width={112}
                            height={112}
                            priority
                            className="rounded-[1.75rem] border border-line shadow-card"
                        />
                        <div>
                            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{app.name}</h1>
                            <p className="mt-1 text-lg text-fg-2">
                                {app.subtitle} · {site.name}
                            </p>
                            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-fg-2">
                                <Rating value={app.stats.rating} reviews={app.stats.reviews} />
                                <span>{app.stats.downloads} indirme</span>
                                <span>{app.category}</span>
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 max-w-2xl text-lg text-fg-2 leading-relaxed">{app.intro}</p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <PlayButton href={app.playUrl} size="lg" />
                        <Link
                            href={`/apps/${app.slug}/privacy/`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-fg-2 hover:text-fg"
                        >
                            <ShieldCheck className="w-4 h-4" /> Gizlilik Politikası
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-surface-2 border-b border-line">
                <div className="container-page py-12">
                    <h2 className="sr-only">Ekran görüntüleri</h2>
                    <div className="rail flex gap-5 overflow-x-auto pb-4 -mx-4 px-4">
                        {app.screenshots.map((src, i) => (
                            <Phone
                                key={src}
                                src={src}
                                alt={`${app.name} ekran görüntüsü ${i + 1}`}
                                className="w-[200px] md:w-[220px] shrink-0 !shadow-card"
                                priority={i < 2}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="container-page py-16 md:py-24">
                <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
                    <div>
                        <p className="eyebrow mb-3">Özellikler</p>
                        <h2 className="font-display text-3xl font-bold tracking-tight">Neler sunuyor?</h2>
                        <div className="mt-8 rounded-2xl bg-coral-soft p-6">
                            <h3 className="font-display font-bold text-coral-strong">{app.explainer.title}</h3>
                            <p className="mt-2 text-fg-2 leading-relaxed">{app.explainer.text}</p>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {app.features.map((f) => {
                            const Icon = featureIcons[f.icon];
                            return (
                                <div key={f.title} className="rounded-2xl border border-line bg-surface p-5">
                                    <Icon className="w-5 h-5 text-coral" />
                                    <h3 className="mt-3 font-semibold">{f.title}</h3>
                                    <p className="mt-1 text-sm text-fg-2 leading-relaxed">{f.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="border-t border-line">
                <div className="container-page py-16 grid gap-10 md:grid-cols-2">
                    <div>
                        <h2 className="font-display text-2xl font-bold">Kimler için?</h2>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {app.audience.map((a) => (
                                <span key={a} className="rounded-full border border-line bg-surface px-4 py-2 text-sm">
                                    {a}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="font-display text-2xl font-bold">Destek</h2>
                        <p className="mt-3 text-fg-2 leading-relaxed">
                            Bir hata mı buldun ya da bir özellik mi istiyorsun? Yorumların yol haritasını belirliyor.
                        </p>
                        <a
                            href={`mailto:${site.supportEmail}?subject=${encodeURIComponent(app.name)}`}
                            className="mt-4 inline-flex items-center gap-2 font-semibold text-coral-strong hover:underline"
                        >
                            <Mail className="w-4 h-4" /> {site.supportEmail}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
