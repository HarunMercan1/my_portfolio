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
  | "cloud"
  | "wallet"
  | "pie"
  | "repeat"
  | "handshake"
  | "download";

export interface App {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: string;
  playUrl: string;
  /** Store stats are copied by hand from Google Play — update when they change. */
  stats: { rating?: string; reviews?: string; downloads: string; languages: string };
  intro: string;
  explainer: { title: string; text: string };
  features: { icon: FeatureIcon; title: string; text: string }[];
  audience: string[];
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
    subtitle: "Gelir Gider",
    tagline: "Paranın nereye gittiğini gör, bütçene sadık kal. Sade ve hızlı kişisel finans.",
    category: "Finans",
    playUrl: "https://play.google.com/store/apps/details?id=com.mercansoftware.wallet_elite",
    stats: { downloads: "10+", languages: "18" },
    intro:
      "Ay sonunda paranın nereye gittiğini merak ediyor musun? Cüzdan Elite gelir ve giderlerini saniyeler içinde kaydetmeni, bütçe belirlemeni ve borçlarını tek yerden takip etmeni sağlar.",
    explainer: {
      title: "Banka hesabına bağlanmaz",
      text: "Kart ya da banka bilgisi istemez. Kayıtlarını kendin girersin; hesabını ve tüm verilerini dilediğin zaman Ayarlar'dan silebilirsin.",
    },
    features: [
      { icon: "wallet", title: "Birden fazla cüzdan", text: "Nakit, banka, kredi kartı ve daha fazlası." },
      { icon: "pie", title: "Aylık bütçeler", text: "Kategori bazında bütçe belirle, ne kadar kaldığını gör." },
      { icon: "repeat", title: "Tekrarlayan işlemler", text: "Kira, fatura ve abonelikler kendiliğinden eklenir." },
      { icon: "handshake", title: "Borç takibi", text: "Kime borcun var, kimden alacağın var." },
      { icon: "chart", title: "İstatistikler", text: "Kategori dağılımı, aylık trendler ve grafikler." },
      { icon: "palette", title: "Temalar", text: "Açık ve koyu mod, birden fazla renk teması." },
      { icon: "cloud", title: "Bulut eşitleme", text: "Cihaz değiştirsen de verilerin seninle gelir." },
      { icon: "download", title: "CSV / Excel dışa aktarma", text: "Kayıtlarını dilediğin yerde kullan." },
    ],
    audience: ["Öğrenciler", "Çalışanlar", "Aileler", "Bütçesini kontrol etmek isteyen herkes"],
    screenshots: [1, 2, 3, 4, 5].map((n) => `/apps/wallet-elite/screen-${n}.png`),
    framedScreenshots: true,
  },
];

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
