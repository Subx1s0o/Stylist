import { useTranslations } from "next-intl";
export default function QuoteSection() {
  const t = useTranslations("Home.quote");
  return (
    <section className="pb-[60px]">
      <div className="relative bg-black  pl-[44px] pr-4 mx-auto pt-[72px] pb-10  ">
        <p className="absolute text-white top-[60px] left-4 font-exo2 text-xmd">
          ‘’
        </p>
        <h2 className="text-white font-exo2 text-base mb-5">{t("title")}</h2>
        <p className="text-white  text-end text-sm">{t("author")}</p>
      </div>
    </section>
  );
}
