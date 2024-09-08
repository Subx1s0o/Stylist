import { defaultLocale, Locale } from "@/utils/config";
import { getLocale } from "next-intl/server";
import { fetchService } from "../services";
import Page from "./page";

export default async function MakeupLayout({
  params: { id },
}: {
  params: { id: string };
}) {
  const service = await fetchService(id, "makeup");
  const locale = (await getLocale()) || defaultLocale;
  return <Page service={service} locale={locale as Locale} />;
}
