import ServicesBreadcrumb from "@/components/features/ServicesBreadcrumb";
import ServicesList from "@/components/features/ServicesList";
import { ServicesPageProps } from "@/types/services.interface";
import { useTranslations } from "next-intl";

export default function ServicesPage({ services, locale }: ServicesPageProps) {
  const t = useTranslations("Makeup");
  return (
    <section className="pt-[68px] pb-section">
      <div className="my-container">
        <h1 className="font-exo2 text-md text-center mb-5">{t("title")}</h1>
        <ServicesBreadcrumb category="Makeup" />
        <ServicesList services={services} locale={locale} category={"Makeup"} />
      </div>
    </section>
  );
}
