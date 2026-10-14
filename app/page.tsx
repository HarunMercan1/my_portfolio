import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FlaskConical, GraduationCap, Mail, MapPin, Wrench } from "lucide-react";
import { apps } from "@/lib/apps";
import { legalApps } from "@/lib/legal";
import { site } from "@/lib/site";
import { ButtonLink, Phone, PlayButton, Rating, SectionHeading } from "@/components/site/ui";
import { ContactForm } from "@/components/site/ContactForm";

const featured = apps[0];
// Apps that have legal pages but no public listing yet are in closed testing.
const upcomingCount = legalApps.filter((l) => !apps.some((a) => a.slug === l.slug)).length;

export default function Home() {
    return (
        <>
            <Hero />
            <Apps />
            <About />
            <Contact />
        </>
    );
}

function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 dots opacity-60 [mask-image:radial-gradient(ellipse_at_70%_40%,black,transparent_70%)]" />
            <div className="container-page relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_1fr]">
                <div>
                    <p className="rise eyebrow mb-5">Bağımsız mobil uygulama stüdyosu</p>
                    <h1 className="rise rise-1 font-display text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-bold tracking-tight">
                        Küçük ama <span className="text-coral">özenle</span> yapılmış uygulamalar.
                    </h1>
                    <p className="rise rise-2 mt-6 max-w-xl text-lg md:text-xl text-fg-2 leading-relaxed">
                        Mercan Software, günlük hayatı kolaylaştıran sade ve hızlı Android uygulamaları geliştirir.
                        Fazlası yok, eksiği yok.
                    </p>
                    <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
                        <ButtonLink href="/#apps">Uygulamaları keşfet</ButtonLink>
                        <ButtonLink href="/#contact" variant="ghost">
                            İletişime geç
                        </ButtonLink>
                    </div>

                    <dl className="rise rise-4 mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
                        <Stat value={`${featured.stats.rating}★`} label="Play puanı" />
                        <Stat value={featured.stats.downloads} label="İndirme" />
                        <Stat value={featured.stats.languages} label="Dil desteği" />
                    </dl>
                </div>

                <div className="rise rise-2 relative mx-auto w-full max-w-[420px] h-[460px] sm:h-[540px]">
                    <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral-soft" />
                    <Phone
                        src={featured.screenshots[0]}
                        alt={`${featured.name} ana ekranı`}
                        className="absolute left-[4%] top-[8%] w-[46%] -rotate-6"
                    />
                    <Phone
                        src={featured.screenshots[1]}
                        alt={`${featured.name} sayaç ekranı`}
                        className="absolute right-[4%] top-0 w-[50%] rotate-3"
                        priority
                    />
                    <Link
                        href={`/apps/${featured.slug}/`}
                        className="absolute bottom-0 left-1/2 flex w-max -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl border border-line bg-surface py-2.5 pl-2.5 pr-4 shadow-card hover:border-fg-3 transition-colors"
                    >
                        <Image src={`/apps/${featured.slug}/icon.png`} alt="" width={40} height={40} className="rounded-xl" />
                        <span className="text-sm leading-tight">
                            <span className="block font-semibold">{featured.name}</span>
                            <span className="block text-fg-3">Google Play&apos;de yayında</span>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}

function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div>
            <dt className="sr-only">{label}</dt>
            <dd className="font-display text-2xl md:text-3xl font-bold">{value}</dd>
            <dd className="mt-1 text-sm text-fg-3">{label}</dd>
        </div>
    );
}

function Apps() {
    return (
        <section id="apps" className="py-20 md:py-28 border-t border-line">
            <div className="container-page">
                <SectionHeading
                    eyebrow="Uygulamalar"
                    title="Şu an yayında olanlar"
                    text="Her uygulama tek bir işi en iyi şekilde yapmak için tasarlanıyor."
                />

                <div className="mt-12 space-y-6">
                    {apps.map((app) => (
                        <article
                            key={app.slug}
                            className="grid overflow-hidden rounded-3xl border border-line bg-surface shadow-card lg:grid-cols-[1fr_1.1fr]"
                        >
                            <div className="p-7 md:p-10 flex flex-col">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={`/apps/${app.slug}/icon.png`}
                                        alt={`${app.name} simgesi`}
                                        width={72}
                                        height={72}
                                        className="rounded-2xl border border-line"
                                    />
                                    <div>
                                        <h3 className="font-display text-2xl font-bold">{app.name}</h3>
                                        <p className="text-fg-2">
                                            {app.subtitle} · {app.category}
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-6 text-lg text-fg-2 leading-relaxed">{app.tagline}</p>

                                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                                    {app.features.slice(0, 4).map((f) => (
                                        <li key={f.title} className="flex items-center gap-2 text-sm">
                                            <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                                            {f.title}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-fg-2">
                                    <Rating value={app.stats.rating} reviews={app.stats.reviews} />
                                    <span>{app.stats.downloads} indirme</span>
                                </div>

                                <div className="mt-auto pt-8 flex flex-wrap items-center gap-4">
                                    <PlayButton href={app.playUrl} />
                                    <Link
                                        href={`/apps/${app.slug}/`}
                                        className="group inline-flex items-center gap-1.5 text-sm font-semibold hover:text-coral-strong"
                                    >
                                        Detaylar
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                    </Link>
                                </div>
                            </div>

                            <div className="relative bg-surface-2 dots flex items-end justify-center gap-4 px-6 pt-10 overflow-hidden min-h-[320px]">
                                {app.screenshots.slice(2, 5).map((src, i) => (
                                    <Phone
                                        key={src}
                                        src={src}
                                        alt={`${app.name} ekran görüntüsü ${i + 3}`}
                                        className={`w-[30%] max-w-[170px] ${i === 1 ? "translate-y-0" : "translate-y-8"}`}
                                    />
                                ))}
                            </div>
                        </article>
                    ))}

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-3xl border border-dashed border-line p-7 md:p-8">
                        <div className="grid place-items-center w-12 h-12 shrink-0 rounded-2xl bg-coral-soft text-coral-strong">
                            <FlaskConical className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-display text-lg font-bold">Yolda: {upcomingCount} yeni uygulama</h3>
                            <p className="text-fg-2">
                                Şu an kapalı testteler. Yayına çıktıklarında burada olacaklar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function About() {
    const facts = [
        { icon: GraduationCap, text: "Gazi Üniversitesi · Bilgisayar Mühendisliği" },
        { icon: MapPin, text: "Ankara, Türkiye" },
        { icon: Wrench, text: "Flutter · Dart · Supabase" },
    ];

    return (
        <section id="about" className="py-20 md:py-28 border-t border-line bg-surface">
            <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
                <div>
                    <SectionHeading eyebrow="Hakkında" title="Mercan Software'in arkasındaki isim" />
                    <div className="mt-10 flex items-center gap-4">
                        <div className="grid place-items-center w-16 h-16 rounded-full bg-coral-soft font-display text-xl font-bold text-coral-strong">
                            HM
                        </div>
                        <div>
                            <p className="font-display text-lg font-bold">{site.founder}</p>
                            <p className="text-fg-2">Kurucu & geliştirici</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-5 text-lg text-fg-2 leading-relaxed">
                    <p>
                        Merhaba, ben <span className="text-fg font-semibold">Harun</span>. Mercan Software benim bağımsız
                        yazılım markam. Uygulamaları baştan sona kendim tasarlıyor, geliştiriyor ve yayınlıyorum.
                    </p>
                    <p>
                        Her uygulamayı kendim de kullanacağım gibi yapmaya çalışıyorum: sade bir arayüz, hızlı bir deneyim
                        ve kullanıcı yorumlarını dinleyerek gelen düzenli güncellemeler.
                    </p>

                    <ul className="pt-2 space-y-3 text-base">
                        {facts.map((f) => (
                            <li key={f.text} className="flex items-center gap-3">
                                <f.icon className="w-5 h-5 text-coral" />
                                {f.text}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {site.socials.map((s) => (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-line px-4 py-2 text-sm font-medium text-fg hover:border-fg-3 transition-colors"
                            >
                                {s.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section id="contact" className="py-20 md:py-28 border-t border-line">
            <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
                <div>
                    <SectionHeading
                        eyebrow="İletişim"
                        title="Bir fikrin, önerin ya da hata bildirimin mi var?"
                        text="Uygulamalarla ilgili her geri bildirim okunuyor. Formu doldurabilir ya da doğrudan e-posta atabilirsin."
                    />
                    <a
                        href={`mailto:${site.supportEmail}`}
                        className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 hover:border-fg-3 transition-colors"
                    >
                        <Mail className="w-5 h-5 text-coral" />
                        <span className="font-medium break-all">{site.supportEmail}</span>
                    </a>
                </div>
                <ContactForm />
            </div>
        </section>
    );
}
