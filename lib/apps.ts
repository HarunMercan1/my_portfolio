/**
 * All apps shown on the site. To add a new app, add an entry here and put its
 * icon + screenshots under /public/apps/<slug>/. Pages are generated from this list.
 */

export type FeatureIcon =
  | "palette"
  | "bell"
  | "music"
  | "chart"
  | "flame"
  | "sliders"
  | "languages"
  | "cloud";

export interface App {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: string;
  playUrl: string;
  /** Store stats are copied by hand from Google Play — update when they change. */
  stats: { rating: string; reviews: string; downloads: string; languages: string };
  intro: string;
  explainer: { title: string; text: string };
  features: { icon: FeatureIcon; title: string; text: string }[];
  audience: string[];
  screenshots: string[];
}

export const apps: App[] = [
  {
    slug: "pomodoro-elite",
    name: "Pomodoro Elite",
    subtitle: "Odak Sayacı",
    tagline: "Zamanı yönetmenin en elit yolu. Ücretsiz, basit, hızlı ve modern.",
    category: "Verimlilik",
    playUrl: "https://play.google.com/store/apps/details?id=com.mercansoftware.pomodoro_elite",
    stats: { rating: "4,9", reviews: "32", downloads: "1.000+", languages: "23" },
    intro:
      "Ders çalışırken, kod yazarken ya da kitap okurken odaklanmakta zorlanıyor musun? Pomodoro Elite, klasik Pomodoro tekniğini modern ve şık bir tasarımla birleştirerek verimliliğini artırır.",
    explainer: {
      title: "Pomodoro tekniği nedir?",
      text: "25 dakika odaklanma ve 5 dakika moladan oluşan döngülerle çalışan bir zaman yönetimi yöntemidir. Her 4 döngüde bir uzun mola vererek zihinsel yorgunluğun önüne geçersin.",
    },
    features: [
      { icon: "palette", title: "10 premium tema", text: "Elite, Cyberpunk 2077, Deep Ocean ve daha fazlası." },
      { icon: "chart", title: "Detaylı istatistikler", text: "Günlük, haftalık ve tüm zamanların odak verileri." },
      { icon: "flame", title: "Günlük seri", text: "Zinciri kırma, motivasyonunu yüksek tut." },
      { icon: "sliders", title: "Özelleştirilebilir süreler", text: "Odak, kısa ve uzun mola sürelerini kendin belirle." },
      { icon: "music", title: "Odak müzikleri", text: "Orman, yağmur, okyanus gibi doğa sesleri." },
      { icon: "bell", title: "Bildirim sesleri", text: "Zil, alarm ve dijital seslerden seç." },
      { icon: "cloud", title: "Bulut eşitleme", text: "İlerlemeni Google hesabına aktar, kaybetme." },
      { icon: "languages", title: "23 dil desteği", text: "Türkçe, İngilizce, Almanca, Fransızca ve dahası." },
    ],
    audience: ["Öğrenciler", "Yazılımcılar", "Yazarlar", "Profesyoneller", "Daha verimli olmak isteyen herkes"],
    screenshots: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/apps/pomodoro-elite/screen-${n}.png`),
  },
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
