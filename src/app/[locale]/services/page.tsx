import { defaultLocale } from "@/utils/config";
import { servicesMetadataConfig } from "@/utils/metadata";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

import ServicesSection from "@/components/sections/ServicesSection";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) || defaultLocale;
  const metadata =
    servicesMetadataConfig[locale] || servicesMetadataConfig[defaultLocale];

  return {
    title: metadata.title,
    description: metadata.description,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_PRODUCTION_URL}`),
    alternates: {
      canonical: locale === "uk" ? "/services" : `/${locale}/services`,
      languages: {
        en: "/en/services",
        uk: "/services",
      },
    },
    openGraph: metadata.openGraph,
  };
}

export default function ServicesPage() {
  return <ServicesSection className="pt-[68px]" />;
}
