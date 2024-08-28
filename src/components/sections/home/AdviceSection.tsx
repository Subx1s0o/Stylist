import WhiteLink from "@/components/ui/buttons/WhiteLink";
import { useTranslations } from "next-intl";
export default function AdviceSection() {
  const t = useTranslations("Home");
  return (
    <section className="bg-black mb-[60px]">
      <div className="my-container pt-[100px] pb-[120px]">
        <h2 className="text-center mb-10 text-md text-white">
          {t("question")}
        </h2>
        <WhiteLink href="/contacts">{t("advice")}</WhiteLink>
      </div>
    </section>
  );
}
