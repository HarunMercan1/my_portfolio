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

/** A paragraph, or a bullet list when given as an array. */
export type PolicyBlock = string | string[];

export interface PolicySection {
  title: string;
  body: PolicyBlock[];
}

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
  privacy: {
    language: "en" | "tr";
    effectiveDate: string;
    sections: PolicySection[];
  };
}

const supportEmail = "mercansoftware1@gmail.com";

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
    privacy: {
      language: "en",
      effectiveDate: "2025-12-04",
      sections: [
        {
          title: "Privacy Policy",
          body: [
            'This privacy policy applies to the Pomodoro Elite app (hereby referred to as "Application") for mobile devices that was created by Harun Reşit Mercan (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".',
          ],
        },
        {
          title: "Information Collection and Use",
          body: [
            "The Application collects information when you download and use it. This information may include information such as",
            [
              "Your device's Internet Protocol address (e.g. IP address)",
              "The pages of the Application that you visit, the time and date of your visit, the time spent on those pages",
              "The time spent on the Application",
              "The operating system you use on your mobile device",
            ],
            "The Application does not gather precise information about the location of your mobile device.",
            "The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.",
            "For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to None. The information that the Service Provider request will be retained by them and used as described in this privacy policy.",
          ],
        },
        {
          title: "Third Party Access",
          body: [
            "Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.",
            "The Service Provider may disclose User Provided and Automatically Collected Information:",
            [
              "as required by law, such as to comply with a subpoena, or similar legal process;",
              "when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;",
              "with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.",
            ],
          ],
        },
        {
          title: "Opt-Out Rights",
          body: [
            "You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.",
          ],
        },
        {
          title: "Data Retention Policy",
          body: [
            `The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at ${supportEmail} and they will respond in a reasonable time.`,
          ],
        },
        {
          title: "Children",
          body: [
            "The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.",
            `The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider (${supportEmail}) so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).`,
          ],
        },
        {
          title: "Security",
          body: [
            "The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.",
          ],
        },
        {
          title: "Changes",
          body: [
            "This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.",
          ],
        },
        {
          title: "Your Consent",
          body: [
            "By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.",
          ],
        },
        {
          title: "Contact Us",
          body: [
            `If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at ${supportEmail}.`,
          ],
        },
      ],
    },
  },
];

/** Apps in closed testing — shown as a teaser until they go live. */
export const upcomingCount = 2;

export function getApp(slug: string) {
  return apps.find((app) => app.slug === slug);
}
