import { defaultLocale, Locale } from "@/utils/config";
import { getLocale } from "next-intl/server";
import { fetchServices } from "./services";
import ServicesPage from "./ServicesPage";

export default async function MakeUpPage() {
  const services = await fetchServices(1, "makeup");
  const locale = (await getLocale()) || defaultLocale;

  return (
    <section className="pt-[68px] pb-section">
      <div className="my-container">
        <ServicesPage services={services} locale={locale as Locale} />
      </div>
    </section>
  );
}
