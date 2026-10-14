import fs from "node:fs";
import path from "node:path";

/**
 * Legal pages (privacy policy, account deletion) for every app — including apps
 * still in closed testing, since Play Console needs these URLs before launch.
 *
 * Texts live in /content/legal/<slug>/<kind>.<lang>.html and are rendered as-is.
 * Pages: /apps/<slug>/privacy/ and /apps/<slug>/delete-account/
 */

export type Lang = "tr" | "en";
export type LegalKind = "privacy" | "delete-account";

export interface LegalApp {
  slug: string;
  name: string;
  docs: Partial<Record<LegalKind, Lang[]>>;
}

export const legalApps: LegalApp[] = [
  {
    slug: "pomodoro-elite",
    name: "Pomodoro Elite",
    docs: { privacy: ["tr", "en"], "delete-account": ["tr", "en"] },
  },
  { slug: "lotus", name: "Lotus", docs: { privacy: ["tr", "en"], "delete-account": ["tr", "en"] } },
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

export function readLegal(slug: string, kind: LegalKind, lang: Lang) {
  return fs.readFileSync(path.join(process.cwd(), "content", "legal", slug, `${kind}.${lang}.html`), "utf8");
}
