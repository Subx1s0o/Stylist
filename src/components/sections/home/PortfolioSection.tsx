import CustomLink from "@/components/ui/CustomLink";
import { useTranslations } from "next-intl";
import Image from "next/image";
export default function PortfolioSection() {
  const t = useTranslations("Home.portfolio");
  return (
    <section className="pb-section">
      <div className="my-container">
        <h2 className="text-md font-exo2 text-center mb-5">{t("title")}</h2>
        <p className="mb-3 text-sm">{t("description")}</p>
        <ul className="grid grid-cols-2 grid-rows-2 gap-2 mb-3 ">
          <li className=" row-span-2">
            <Image
              width={168}
              height={214}
              style={{
                width: "100%",
                height: "100%",
          
              }}
              src="/images/portfolio/portfolio.avif"
              alt="portfolio image"
            />
          </li>
          <li className=" row-span-3">
            <Image
              width={167}
              height={258}
              style={{
                width: "100%",
                height: "auto",
          
              }}
              src="/images/portfolio/portfolio2.avif"
              alt="portfolio image"
            />
          </li>
          <li className=" row-span-3">
            <Image
              width={168}
              height={268}
              style={{
                width: "100%",
                height: "auto",
          
              }}
              src="/images/portfolio/portfolio3.avif"
              alt="portfolio image"
            />
          </li>
          <li className=" row-span-2">
            <Image
              width={168}
              height={224}
              style={{
                width: "100%",
                height: "auto",
               
              }}
              src="/images/portfolio/portfolio4.avif"
              alt="portfolio image"
            />
          </li>
        </ul>
        <CustomLink variant="outline" href="/portfolio">
          {t("see-more")}
        </CustomLink>
      </div>
    </section>
  );
}
