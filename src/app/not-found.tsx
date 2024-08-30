"use client";
import CustomButton from "@/components/ui/CustomButton";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");
  const router = useRouter();
  return (
    <div className="my-container my-auto pt-[232px] pb-[200px]">
      <h1 className="font-exo2 text-xl text-center mb-5">404</h1>
      <p className="font-exo2 text-base text-center mb-[60px]">
        {t("description")}
      </p>
      <div className="">
        <CustomButton
          aria-label={t("button-title")}
          variant="black"
          onClick={() => router.back()}
        >
          {t("button-title")}
        </CustomButton>
      </div>
    </div>
  );
}
