import { defaultLocale, Locale } from "@/utils/config";
import { getLocale } from "next-intl/server";
import { fetchService } from "../../../../../utils/services";
import MakeupDetailsPage from "./MakeUpDetailsPage";

export default async function MakeupLayout({
  params: { id },
}: {
  params: { id: string };
}) {
  const service = await fetchService(id, "makeup");
  const locale = (await getLocale()) || defaultLocale;

  return <MakeupDetailsPage service={service} locale={locale as Locale} />;
}
