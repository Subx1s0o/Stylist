import { defaultLocale, Locale } from "@/utils/config";
import { fetchServices } from "@/utils/services";
import { getLocale } from "next-intl/server";

import ServicesPage from "@/components/common/Services/ServicesPage";

export default async function MakeUpPage() {
  const services = await fetchServices(1, "makeup");
  const locale = (await getLocale()) || defaultLocale;

  return (
    <ServicesPage
      services={services}
      locale={locale as Locale}
      category="Makeup"
      isFormat={false}
    />
  );
}
