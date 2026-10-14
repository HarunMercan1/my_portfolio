import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { legalApps } from "@/lib/legal";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: `${site.url}/` },
        ...apps.map((app) => ({ url: `${site.url}/apps/${app.slug}/` })),
        ...legalApps.flatMap((app) =>
            Object.keys(app.docs).map((kind) => ({ url: `${site.url}/apps/${app.slug}/${kind}/` })),
        ),
    ];
}
