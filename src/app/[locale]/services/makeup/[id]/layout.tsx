import { defaultLocale, Locale } from "@/utils/config";
import { getLocale } from "next-intl/server";
import Page from "./page";

export async function fetchService(id: string) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/services/makeup/${id}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return { services: null };
  }
}

export default async function MakeupLayout({
  params: { id },
}: {
  params: { id: string };
}) {
  const service = await fetchService(id);
  const locale = (await getLocale()) || defaultLocale;
  return (
    <>
      <Page service={service} locale={locale as Locale} />
    </>
  );
}
