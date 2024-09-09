"use client";

import { ServiceCardProps } from "@/types/services.interface";
import { motion as m } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import CustomLink from "../ui/CustomLink";

export default function ServiceCard({
  service,
  number,
  locale,
  category,
}: ServiceCardProps) {
  const t = useTranslations(category);

  return (
    <m.li
      className="grid grid-cols-2 gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: number * 0.05 }}
    >
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
          {t("button")}
        </CustomLink>
      </div>

      <div className="relative w-full max-h-[300px] h-auto">
        <Image
          src={service.imageUrl}
          alt={service.title[locale]}
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          style={{ objectFit: "cover" }}
          quality={70}
        />
      </div>
    </m.li>
  );
}
