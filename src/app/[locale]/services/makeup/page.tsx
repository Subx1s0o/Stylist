import { defaultLocale, Locale } from "@/utils/config";
import { fetchServices } from "@/utils/services";
import { getLocale } from "next-intl/server";

import ServicesMakeupPage from "@/components/sections/Services/ServicesMakeupPage";

export default async function MakeUpPage() {
  const services = await fetchServices(1, "makeup");
  const locale = (await getLocale()) || defaultLocale;

  return <ServicesMakeupPage services={services} locale={locale as Locale} />;
}
