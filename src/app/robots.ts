import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/services/makeup", "/services/style"],
      allow: ["/portfolio", "/services", "/contacts"],
    },
    sitemap: `${process.env.NEXT_PUBLIC_PRODUCTION_URL}/sitemap.xml`,
  };
}
