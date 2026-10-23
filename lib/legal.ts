import type { Lang, Localized } from "./i18n";

/**
 * Legal pages (privacy policy, account deletion) for every app — including apps
 * still in closed testing, since Play Console needs these URLs before launch.
 *
 * Texts live in /content/legal/<slug>/<kind>.<lang>.html and are rendered as-is (read in LegalPage).
 * Pages: /apps/<slug>/privacy/ and /apps/<slug>/delete-account/
 */

export type { Lang };
export type LegalKind = "privacy" | "delete-account";

export interface LegalApp {
  slug: string;
  name: string;
  /** One-line description, shown on the home page while the app is in closed testing. */
  tagline?: Localized;
  docs: Partial<Record<LegalKind, Lang[]>>;
}

export const legalApps: LegalApp[] = [
  {
    slug: "pomodoro-elite",
    name: "Pomodoro Elite",
    docs: { privacy: ["tr", "en"], "delete-account": ["tr", "en"] },
  },
  {
    slug: "lotus",
    name: "Lotus",
    tagline: {
      tr: "İzlediğin dizi ve filmleri takip et, puanla, arkadaşlarınla ve topluluklarla paylaş.",
      en: "Track the shows and movies you watch, rate them, and share with friends and communities.",
    },
    docs: { privacy: ["tr", "en"], "delete-account": ["tr", "en"] },
  },
  { slug: "wallet-elite", name: "Wallet Elite", docs: { privacy: ["tr", "en"] } },
];

export const legalTitles: Record<LegalKind, Record<Lang, string>> = {
  privacy: { tr: "Gizlilik Politikası", en: "Privacy Policy" },
  "delete-account": { tr: "Hesap Silme", en: "Delete Account" },
};

export function getLegalApp(slug: string) {
  return legalApps.find((app) => app.slug === slug);
}

export function legalParams(kind: LegalKind) {
  return legalApps.filter((app) => app.docs[kind]).map((app) => ({ slug: app.slug }));
}
