/**
 * All apps shown on the site. To add a new app, add an entry here and put its
 * icon + screenshots under /public/apps/<slug>/. Pages are generated from this list.
 * Texts are given in both site languages; reviews stay in their original language.
 */

import type { Localized } from "./i18n";

export type FeatureIcon =
  | "palette"
  | "bell"
  | "music"
  | "chart"
  | "flame"
  | "sliders"
  | "languages"
  | "cloud"
  | "wallet"
  | "pie"
  | "repeat"
  | "handshake"
  | "download";

export interface App {
  slug: string;
  name: string;
  subtitle: Localized;
  tagline: Localized;
  category: Localized;
  playUrl: string;
  /** Store stats are copied by hand from Google Play — update when they change. */
  stats: { rating?: string; reviews?: string; downloads: string; languages: string };
  intro: Localized;
  explainer: { title: Localized; text: Localized };
  features: { icon: FeatureIcon; title: Localized; text: Localized }[];
  audience: Localized[];
  screenshots: string[];
  /** Hand-picked 5-star Google Play reviews; author shortened to first name + initial. */
  reviews?: { author: string; text: string }[];
  /** Screenshots are store graphics that already include a device frame and caption, so show them as-is. */
  framedScreenshots?: boolean;
}

export const apps: App[] = [
  {
    slug: "pomodoro-elite",
    name: "Pomodoro Elite",
    subtitle: { tr: "Odak Sayacı", en: "Focus Timer" },
    tagline: {
      tr: "Zamanı yönetmenin en elit yolu. Ücretsiz, basit, hızlı ve modern.",
      en: "The most elite way to manage your time. Free, simple, fast and modern.",
    },
    category: { tr: "Verimlilik", en: "Productivity" },
    playUrl: "https://play.google.com/store/apps/details?id=com.mercansoftware.pomodoro_elite",
    stats: { rating: "4,9", reviews: "32", downloads: "1.000+", languages: "23" },
    intro: {
      tr: "Ders çalışırken, kod yazarken ya da kitap okurken odaklanmakta zorlanıyor musun? Pomodoro Elite, klasik Pomodoro tekniğini modern ve şık bir tasarımla birleştirerek verimliliğini artırır.",
      en: "Struggling to focus while studying, coding or reading? Pomodoro Elite pairs the classic Pomodoro technique with a modern, stylish design to boost your productivity.",
    },
    explainer: {
      title: { tr: "Pomodoro tekniği nedir?", en: "What is the Pomodoro technique?" },
      text: {
        tr: "25 dakika odaklanma ve 5 dakika moladan oluşan döngülerle çalışan bir zaman yönetimi yöntemidir. Her 4 döngüde bir uzun mola vererek zihinsel yorgunluğun önüne geçersin.",
        en: "A time management method built on cycles of 25 minutes of focus and a 5-minute break. Taking a long break every 4 cycles keeps mental fatigue away.",
      },
    },
    features: [
      { icon: "palette", title: { tr: "10 premium tema", en: "10 premium themes" }, text: { tr: "Elite, Cyberpunk 2077, Deep Ocean ve daha fazlası.", en: "Elite, Cyberpunk 2077, Deep Ocean and more." } },
      { icon: "chart", title: { tr: "Detaylı istatistikler", en: "Detailed statistics" }, text: { tr: "Günlük, haftalık ve tüm zamanların odak verileri.", en: "Daily, weekly and all-time focus data." } },
      { icon: "flame", title: { tr: "Günlük seri", en: "Daily streak" }, text: { tr: "Zinciri kırma, motivasyonunu yüksek tut.", en: "Don't break the chain, keep your motivation high." } },
      { icon: "sliders", title: { tr: "Özelleştirilebilir süreler", en: "Custom durations" }, text: { tr: "Odak, kısa ve uzun mola sürelerini kendin belirle.", en: "Set your own focus, short break and long break lengths." } },
      { icon: "music", title: { tr: "Odak müzikleri", en: "Focus sounds" }, text: { tr: "Orman, yağmur, okyanus gibi doğa sesleri.", en: "Nature sounds like forest, rain and ocean." } },
      { icon: "bell", title: { tr: "Bildirim sesleri", en: "Notification sounds" }, text: { tr: "Zil, alarm ve dijital seslerden seç.", en: "Pick from bell, alarm and digital sounds." } },
      { icon: "cloud", title: { tr: "Bulut eşitleme", en: "Cloud sync" }, text: { tr: "İlerlemeni Google hesabına aktar, kaybetme.", en: "Back up your progress to your Google account." } },
      { icon: "languages", title: { tr: "23 dil desteği", en: "23 languages" }, text: { tr: "Türkçe, İngilizce, Almanca, Fransızca ve dahası.", en: "Turkish, English, German, French and more." } },
    ],
    audience: [
      { tr: "Öğrenciler", en: "Students" },
      { tr: "Yazılımcılar", en: "Developers" },
      { tr: "Yazarlar", en: "Writers" },
      { tr: "Profesyoneller", en: "Professionals" },
      { tr: "Daha verimli olmak isteyen herkes", en: "Anyone who wants to be more productive" },
    ],
    screenshots: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/apps/pomodoro-elite/screen-${n}.png`),
    reviews: [
      { author: "Süleyman Y.", text: "Bence pomodoro tekniği odaklanma ve verimlilik açısından çok önemli ve etkili bir teknik, bu tekniğe bu şekilde premium hissettiren bir uygulama ile erişebilmek gerçekten harika. Bunun için çok teşekkürler." },
      { author: "Hüseyin G.", text: "Sade bir uygulama. Karmaşık olmasına gerek de yok zaten. Ücretsizken de yeterli işi yapabiliyor. Çok teşekkürler." },
      { author: "emily", text: "Bir pomodoro uygulaması için kullanıcının tüm isteklerini karşılıyor diyebilirim. Süresini istediğiniz gibi ayarlayabiliyorsunuz. Basit, tatlı renkli bir arayüzü var. Kesinlikle 5 ⭐" },
      { author: "Muhammedemin T.", text: "On numara, uygulama sayesinde çalışma düzenim oldu." },
      { author: "Emre A.", text: "Arayüz çok şık olmuş, ayrıca özlü sözler kısmı özgün bir fikir. Elinize sağlık." },
      { author: "Nuray Y.", text: "Çok şık ve sade olmuş, harika ve tam istediğim gibi." },
      { author: "Bahar Ç.", text: "Nihayet istediğim uygulamayı buldum, mükemmel 🌸💞" },
      { author: "Jiniret", text: "Mükemmel bir uygulama, çok kullanışlı. Ben misafir modunda kullanıyorum." },
      { author: "Cesur A.", text: "Tek kelimeyle mükemmel." },
    ],
  },
  {
    slug: "wallet-elite",
    name: "Cüzdan Elite",
    subtitle: { tr: "Gelir Gider", en: "Expense Tracker" },
    tagline: {
      tr: "Paranın nereye gittiğini gör, bütçene sadık kal. Sade ve hızlı kişisel finans.",
      en: "See where your money goes and stick to your budget. Simple, fast personal finance.",
    },
    category: { tr: "Finans", en: "Finance" },
    playUrl: "https://play.google.com/store/apps/details?id=com.mercansoftware.wallet_elite",
    stats: { downloads: "10+", languages: "18" },
    intro: {
      tr: "Ay sonunda paranın nereye gittiğini merak ediyor musun? Cüzdan Elite gelir ve giderlerini saniyeler içinde kaydetmeni, bütçe belirlemeni ve borçlarını tek yerden takip etmeni sağlar.",
      en: "Wondering where your money went by the end of the month? Cüzdan Elite lets you log income and expenses in seconds, set budgets and track your debts in one place.",
    },
    explainer: {
      title: { tr: "Banka hesabına bağlanmaz", en: "No bank connection" },
      text: {
        tr: "Kart ya da banka bilgisi istemez. Kayıtlarını kendin girersin; hesabını ve tüm verilerini dilediğin zaman Ayarlar'dan silebilirsin.",
        en: "It never asks for card or bank details. You enter your records yourself, and you can delete your account and all your data from Settings at any time.",
      },
    },
    features: [
      { icon: "wallet", title: { tr: "Birden fazla cüzdan", en: "Multiple wallets" }, text: { tr: "Nakit, banka, kredi kartı ve daha fazlası.", en: "Cash, bank, credit card and more." } },
      { icon: "pie", title: { tr: "Aylık bütçeler", en: "Monthly budgets" }, text: { tr: "Kategori bazında bütçe belirle, ne kadar kaldığını gör.", en: "Set budgets per category and see what's left." } },
      { icon: "repeat", title: { tr: "Tekrarlayan işlemler", en: "Recurring transactions" }, text: { tr: "Kira, fatura ve abonelikler kendiliğinden eklenir.", en: "Rent, bills and subscriptions are added automatically." } },
      { icon: "handshake", title: { tr: "Borç takibi", en: "Debt tracking" }, text: { tr: "Kime borcun var, kimden alacağın var.", en: "Who you owe, and who owes you." } },
      { icon: "chart", title: { tr: "İstatistikler", en: "Statistics" }, text: { tr: "Kategori dağılımı, aylık trendler ve grafikler.", en: "Category breakdowns, monthly trends and charts." } },
      { icon: "palette", title: { tr: "Temalar", en: "Themes" }, text: { tr: "Açık ve koyu mod, birden fazla renk teması.", en: "Light and dark mode, multiple color themes." } },
      { icon: "cloud", title: { tr: "Bulut eşitleme", en: "Cloud sync" }, text: { tr: "Cihaz değiştirsen de verilerin seninle gelir.", en: "Your data comes with you when you switch devices." } },
      { icon: "download", title: { tr: "CSV / Excel dışa aktarma", en: "CSV / Excel export" }, text: { tr: "Kayıtlarını dilediğin yerde kullan.", en: "Use your records wherever you like." } },
    ],
    audience: [
      { tr: "Öğrenciler", en: "Students" },
      { tr: "Çalışanlar", en: "Employees" },
      { tr: "Aileler", en: "Families" },
      { tr: "Bütçesini kontrol etmek isteyen herkes", en: "Anyone who wants to control their budget" },
    ],
    screenshots: [1, 2, 3, 4, 5].map((n) => `/apps/wallet-elite/screen-${n}.png`),
    framedScreenshots: true,
  },
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
