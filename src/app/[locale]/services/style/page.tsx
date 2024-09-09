import ServicesStylePage from "@/components/sections/Services/ServicesStylePage";
import { defaultLocale, Locale } from "@/utils/config";
import { fetchServices } from "@/utils/services";
import { getLocale } from "next-intl/server";
export default async function StyleUpPage() {
  const services = await fetchServices(1, "style");
  const locale = (await getLocale()) || defaultLocale;
  return <ServicesStylePage services={services} locale={locale as Locale} />;
}
