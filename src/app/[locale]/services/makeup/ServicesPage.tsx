"use client";

import CustomLink from "@/components/ui/CustomLink";
import { Service } from "@/types/services.interface";
import { Locale } from "@/utils/config";
import { loadMoreServices } from "@/utils/loadMoreServices";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchServices } from "./services";

interface ServicesPageProps {
  services: {
    services: Service[];
    totalPages: number;
  };
  locale: Locale;
}

export default function ServicesPage({ services, locale }: ServicesPageProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentServices, setCurrentServices] = useState<{
    services: Service[];
    totalPages: number;
  }>(services);
  const [totalPages, setTotalPages] = useState<number>(services.totalPages);
  const t = useTranslations("Makeup");

  useEffect(() => {
    setTotalPages(services.totalPages);
  }, [services.totalPages]);

  const handleLoadMore = async () => {
    const newPage = await loadMoreServices(
      currentPage,
      setCurrentServices,
      fetchServices,
      "makeup"
    );
    setCurrentPage(newPage);
  };

  return (
    <>
      <h1 className="font-exo2 text-md text-center mb-5">{t("title")}</h1>
      <nav className="mb-5">
        <ul className="flex">
          <li>
            <Link href="/services">{t("breadcrumbs.first-link")}</Link>
          </li>
          <span>&nbsp;/&nbsp;</span>
          <li>
            <Link href="/services/makeup">{t("breadcrumbs.second-link")}</Link>
          </li>
        </ul>
      </nav>
      <ul className="flex flex-col gap-7">
        {currentServices.services.map((service, number) => (
          <li className="grid grid-cols-2 gap-2" key={service._id}>
            <div className="overflow-hidden">
              <h2 className="text-base font-exo2 mb-2">
                #{number + 1} {service.title[locale]}
              </h2>
              <p className="text-sm line-clamp-3 mb-[46px]">
                {service.result[locale]}
              </p>
              <CustomLink
                className="max-w-[127px]"
                variant="outline"
                href={`/services/makeup/${service._id}`}
              >
                Детальніше
              </CustomLink>
            </div>

            {service.imageUrl && (
              <div className="relative w-full max-h-[300px] h-auto">
                <Image
                  src={service.imageUrl}
                  alt={service.title[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            )}
          </li>
        ))}
      </ul>

      {currentPage < totalPages && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </>
  );
}
