import CustomLink from "@/components/ui/ClickableElements/CustomLink";
import { useTranslations } from "next-intl";

export default function AdviceSection() {
  const t = useTranslations("Home");
  return (
    <section className="bg-black mb-section">
      <div className="my-container pt-[100px] pb-[120px]">
        <h2 className="text-center font-exo2 mb-10 text-md text-white">
          {t("question")}
        </h2>
        <CustomLink href="/contacts" variant="white">
          {t("advice")}
        </CustomLink>
      </div>
    </section>
  );
}
