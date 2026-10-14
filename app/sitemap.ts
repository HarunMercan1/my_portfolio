import type { MetadataRoute } from "next";
import { apps } from "@/lib/apps";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        { url: `${site.url}/` },
        ...apps.flatMap((app) => [
            { url: `${site.url}/apps/${app.slug}/` },
            { url: `${site.url}/apps/${app.slug}/privacy/` },
        ]),
    ];
}
