import { ServicesPageProps } from "@/types/services.interface";

import ServicesBreadcrumb from "@/components/elements/BreadCrumb/ServicesBreadCrumb";
import FormatSwitcher from "@/components/features/FormatSwitcher";
import { useTranslations } from "next-intl";

import ServicesList from "./ServicesList";

export default function ServicesPage({
  services,
  locale,
  isFormat,
  category,
}: ServicesPageProps) {
  const t = useTranslations(category);
  return (
    <section className="pt-[68px] pb-section">
      <div className="my-container">
        <h1 className="font-exo2 text-md text-center mb-5">{t("title")}</h1>
        <ServicesBreadcrumb category={category} />
        {isFormat && <FormatSwitcher />}

        <ServicesList services={services} locale={locale} category={category} />
      </div>
    </section>
  );
}
