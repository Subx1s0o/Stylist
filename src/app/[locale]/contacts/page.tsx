import ContactForm from "@/components/forms/ContactForm";
import { defaultLocale } from "@/utils/config";
import { contactsMetadataConfig } from "@/utils/metadata";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) || defaultLocale;
  const metadata =
    contactsMetadataConfig[locale] || contactsMetadataConfig[defaultLocale];

  return {
    title: metadata.title,
    description: metadata.description,
    metadataBase: new URL(`${process.env.NEXT_PUBLIC_PRODUCTION_URL}`),
    alternates: {
      canonical: locale === "uk" ? "/contacts" : `/${locale}/contacts`,
      languages: {
        en: "/en/contacts",
        uk: "/contacts",
      },
    },
    openGraph: metadata.openGraph,
  };
}

export default function ContactsPage() {
  const t = useTranslations("Contacts");

  return (
    <section className="pb-section">
      <div className="my-container">
        <h2 className="text-md my-5 font-exo2 text-center ">{t("title")}</h2>
        <p className="text-sm mb-2">{t("first-description")}</p>
        <p className="text-sm mb-5 max-w-screen-xs">
          {t("second-description")}
        </p>
      </div>

      <div className="relative">
        <picture>
          <source
            srcSet="/images/contacts/background@2x.jpg 2x"
            media="(min-resolution: 2dppx)"
          />
          <Image
            width={375}
            height={410}
            style={{ width: "100%", height: "auto", minHeight: "335px" }}
            src="/images/contacts/background.jpg"
            alt="background photo"
            priority
          />
        </picture>
        <div className="absolute w-full my-container top-[40px] ">
          <h3 className="mb-3 text-white font-exo2 text-center text-base">
            {t("form.title")}
          </h3>
          <p className="text-sm  text-white mb-3 xs:mb-8 sm:mb-10 text-center">
            {t("form.subtitle")}
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
