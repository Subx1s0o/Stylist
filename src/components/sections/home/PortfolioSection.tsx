import BorderLink from "@/components/ui/buttons/BorderLink";
import { useTranslations } from "next-intl";
import Image from "next/image";
export default function PortfolioSection() {
  const t = useTranslations("Home.portfolio");
  return (
    <section className="pb-[60px]">
      <div className="my-container">
        <h2 className="text-md font-exo2 text-center mb-5">{t("title")}</h2>
        <p className="mb-3 text-sm">{t("description")}</p>
        <ul className="grid grid-cols-2 grid-rows-2 gap-2 mb-3">
          <li className=" row-span-2">
            <picture>
              <source
                srcSet="/images/portfolio/portfolio@2x.jpg 2x"
                media="(min-resolution: 2dppx)"
              />
              <Image
                width={168}
                height={214}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src="/images/portfolio/portfolio.jpg"
                alt="portfolio image"
              />
            </picture>
          </li>
          <li className=" row-span-3">
            <picture>
              <source
                srcSet="/images/portfolio/portfolio2@2x.jpg 2x"
                media="(min-resolution: 2dppx)"
              />
              <Image
                width={167}
                height={258}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src="/images/portfolio/portfolio2.jpg"
                alt="portfolio image"
              />
            </picture>
          </li>
          <li className=" row-span-3">
            <picture>
              <source
                srcSet="/images/portfolio/portfolio3@2x.jpg 2x"
                media="(min-resolution: 2dppx)"
              />
              <Image
                width={168}
                height={268}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src="/images/portfolio/portfolio3.jpg"
                alt="portfolio image"
              />
            </picture>
          </li>
          <li className=" row-span-2">
            <picture>
              <source
                srcSet="/images/portfolio/portfolio4@2x.jpg 2x"
                media="(min-resolution: 2dppx)"
              />
              <Image
                width={168}
                height={224}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src="/images/portfolio/portfolio4.jpg"
                alt="portfolio image"
              />
            </picture>
          </li>
        </ul>
        <BorderLink href="/portfolio">{t("see-more")}</BorderLink>
      </div>
    </section>
  );
}
