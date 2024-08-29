import CustomLink from "@/components/ui/CustomLink";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <div className="my-container my-auto pt-[232px] pb-[200px]">
      <h1 className="font-exo2 text-xl text-center mb-5">404</h1>
      <p className="font-exo2 text-base text-center mb-[60px]">
        {t("description")}
      </p>
      <div className="">
        <CustomLink aria-label={t("button-title")} variant="black" href="/">
          {t("button-title")}
        </CustomLink>
      </div>
    </div>
  );
}
