import ServiceDetailsPage from "@/components/common/ServiceDetails/ServiceDetailsPage";
import { defaultLocale, Locale } from "@/utils/config";
import { fetchService } from "@/utils/services";
import { getLocale } from "next-intl/server";

export default async function MakeupLayout({
  params: { id },
}: {
  params: { id: string };
}) {
  const service = await fetchService(id);
  const locale = (await getLocale()) || defaultLocale;

  return (
    <ServiceDetailsPage
      service={service}
      locale={locale as Locale}
      category="Makeup"
    />
  );
}
