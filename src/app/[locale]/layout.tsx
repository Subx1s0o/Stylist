import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "@/styles/globals.css";
import { defaultLocale } from "@/utils/config";
import { homeMetadataConfig } from "@/utils/metadata";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Alegreya, Exo_2 } from "next/font/google";

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-alegreya",
  display: "swap",
});
const exo_2 = Exo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-exo_2",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) || defaultLocale;
  const metadata =
    homeMetadataConfig[locale] || homeMetadataConfig[defaultLocale];

  return {
    title: metadata.title,
    description: metadata.description,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_PRODUCTION_URL}`),
    alternates: {
      canonical: locale === "uk" ? "/" : `/${locale}`,
      languages: {
        en: "/en",
        uk: "/",
      },
    },
    openGraph: metadata.openGraph,
  };
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="h-full">
      <head>
        <meta
          name="google-site-verification"
          content="CImznmAXTPxjKZYXpQ8wPadZfNYcpTnUpHsaqgKQfyI"
        />
      </head>
      <body
        className={`${alegreya.variable} ${exo_2.variable} bg-white font-alegreya text-black h-full flex flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1  ">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
