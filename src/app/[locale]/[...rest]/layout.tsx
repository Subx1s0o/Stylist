import { defaultLocale, Locale } from "@/utils/config";
import { notFoundMetadataConfig } from "@/utils/metadata";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) || defaultLocale;
  const metadata =
    notFoundMetadataConfig[locale] || notFoundMetadataConfig[defaultLocale];

  return {
    title: metadata.title,
    description: metadata.description,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_PRODUCTION_URL}`),
    openGraph: metadata.openGraph,
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: Locale;
  };
}) {
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
