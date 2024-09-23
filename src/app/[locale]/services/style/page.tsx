import ServicesPage from "@/components/common/Services/ServicesPage";
import { defaultLocale, Locale } from "@/utils/config";
import { fetchServices } from "@/utils/services";
import { getLocale } from "next-intl/server";

interface StyleUpPageProps {
  searchParams: { format?: string };
}

export default async function StyleUpPage({ searchParams }: StyleUpPageProps) {
  const { format } = searchParams;
  const actualFormat = (format as "online" | "offline") || "online";
  const services = await fetchServices(1, "style", actualFormat);
  const locale = (await getLocale()) || defaultLocale;
  return (
    <ServicesPage
      services={services}
      locale={locale as Locale}
      category="Style"
      format={actualFormat}
    />
  );
}
