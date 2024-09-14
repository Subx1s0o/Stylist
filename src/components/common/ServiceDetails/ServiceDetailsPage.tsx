import { ServiceCardProps } from "@/types/services.interface";

import { useTranslations } from "next-intl";
import Image from "next/image";

import ServiceDetailsBreadCrumb from "@/components/elements/BreadCrumb/ServiceDetailsBreadcrumb";
import AdviceSection from "@/components/sections/AdviceSection";

export default function ServiceDetailsPage({
  service,
  locale,
  category,
}: Omit<ServiceCardProps, "number">) {
  const t = useTranslations(`ServicePage.${category}`);
  console.log(locale);
  console.log(service);

  const title = service?.title[locale];
  console.log(title);
  return (
    service && (
      <>
        <section className="pt-[68px] pb-section">
          <div className="my-container">
            <h1 className="font-exo2 text-md text-center mb-5">{title}</h1>
            <ServiceDetailsBreadCrumb title={title} category={category} />
            <div
              className={`relative w-full overflow-hidden ${
                service.attention ? "mb-3" : "mb-5"
              }`}
              style={{ aspectRatio: "343 / 371" }}
            >
              <Image
                src={service.imageUrl}
                alt={title}
                fill
                priority
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
              />
            </div>

            {service.attention && (
              <div className="border border-darkGrey p-2 mb-5">
                <ul className="flex gap-3 items-center">
                  <li className="font-exo2 text-xmd">!</li>
                  <li>
                    <small className="text-sm ">
                      {service.attention[locale]}
                    </small>
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
            {service.stages?.[1] && (
              <div>
                <h2 className="text-base text-center font-exo2 mb-3">
                  {t("stages")}
                </h2>
                <div className="relative mb-5">
                  <ul className="flex flex-col gap-[22px] relative">
                    {Object.entries(service.stages).map(
                      ([key, value], index) => (
                        <li key={key} className="relative flex items-center">
                          <div className="relative size-5 flex items-center justify-center rounded-full bg-black">
                            <small className="absolute flex items-center justify-center  inset-0 font-exo2 text-xxs  text-white font-bold">
                              {index + 1}
                            </small>
                          </div>

                          <div className="flex-1 ">
                            <p className="text-sm font-exo2 ">
                              {value[locale]}
                            </p>
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            )}

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
