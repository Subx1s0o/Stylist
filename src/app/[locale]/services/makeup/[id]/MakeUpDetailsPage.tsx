import AdviceSection from "@/components/sections/home/AdviceSection";
import { Service } from "@/types/services.interface";
import { Locale } from "@/utils/config";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function MakeupDetailsPage({
  service,
  locale,
}: {
  service: Service;
  locale: Locale;
}) {
  const t = useTranslations("ServicePage.Makeup");

  const title = service?.title[locale];

  return (
    service && (
      <>
        <section className="pt-[68px] pb-section">
          <div className="my-container">
            <h1 className="font-exo2 text-md text-center mb-5">{title}</h1>
            <nav className="mb-3">
              <ul className="flex">
                <li>
                  <Link href="/services">{t("breadcrumbs.first-link")}</Link>
                </li>
                <span>&nbsp;/&nbsp;</span>
                <li>
                  <Link href="/services/makeup">
                    {t("breadcrumbs.second-link")}
                  </Link>
                </li>
                <span>&nbsp;/&nbsp;</span>
                <li>
                  <Link href={`/services/makeup/${service._id}`}>{title}</Link>
                </li>
              </ul>
            </nav>
            <div
              className={`relative w-full aspect-[343/371] overflow-hidden ${
                service.attention ? "mb-3" : "mb-5"
              }`}
            >
              <Image
                src={service.imageUrl}
                alt={title}
                fill
                priority
                className="absolute inset-0"
              />
            </div>
            {service.attention && (
              <div className="border border-darkGrey p-2 mb-5">
                <ul className="flex gap-3 items-center">
                  <li className="font-exo2 text-xmd">!</li>
                  <li>
                    <p className="text-sm ">{service.attention[locale]}</p>
                  </li>
                </ul>
              </div>
            )}
            <div className="mb-5 flex flex-col items-center">
              <h2 className=" text-base font-exo2 mb-3">
                {t("conditions.title")}
              </h2>
              <ul className="inline-flex flex-col gap-2">
                <li>
                  <p className="text-sm">
                    <span className="font-medium">
                      {t("conditions.duration_work")}:{" "}
                    </span>
                    {service.duration_work[locale]}
                  </p>
                </li>
                {service.duration_consultation && (
                  <li>
                    <p className="text-sm">
                      <span className="font-medium">
                        {t("conditions.duration_consultation")}:{" "}
                      </span>
                      {service.duration_consultation[locale]}
                    </p>
                  </li>
                )}
                <li>
                  <p className="text-sm">
                    <span className="font-medium">
                      {t("conditions.format")}:{" "}
                    </span>
                    {service.format}
                  </p>
                </li>
                <li>
                  <p className="text-sm">
                    <span className="font-medium">
                      {t("conditions.price")}:{" "}
                    </span>
                    {service.price} €
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-center mb-3 text-base font-exo2">
                {t("result.title")}
              </h2>
              <p className="text-sm">{service.result[locale]}</p>
            </div>
          </div>
        </section>
        <AdviceSection />
      </>
    )
  );
}
