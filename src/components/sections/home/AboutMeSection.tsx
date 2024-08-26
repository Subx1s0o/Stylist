import RectangleIcon from "@/assets/icons/decoration/about-rectangle.svg";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutMeSection() {
  const t = useTranslations("Home.about-me");
  return (
    <section className="pb-[60px]">
      <div className="my-container">
        <h2 className="text-md text-center mb-5">{t("title")}</h2>
        <p className="mb-[17px] max-w-[195px] text-sm">{t("first-text")}</p>
        <ul className="grid grid-rows-2 gap-[22px] ">
          <li className="grid grid-cols-[1fr_1fr] gap-4 items-center">
            <div className="relative">
              <picture>
                <source
                  srcSet="/images/about-me1@2x.jpg 2x"
                  media="(min-resolution: 2dppx)"
                />
                <Image
                  src="/images/about-me1.jpg"
                  alt="Stylish People "
                  width={174}
                  height={272}
                  style={{
                    width: "100%",
                    minWidth: "134px",
                    height: "auto",
                    minHeight: "232px",
                  }}
                />
              </picture>

              <RectangleIcon className="absolute -top-2 -right-2" />
              <RectangleIcon className="absolute -bottom-2 -right-2 rotate-90" />
            </div>

            <p className="text-sm max-w-[153px]">{t("second-text")}</p>
          </li>
          <li className="grid grid-cols-[1fr_2fr]  gap-4 items-center">
            <p className="text-sm">{t("third-text")}</p>

            <div className="relative">
              <picture>
                <source
                  srcSet="/images/about-me2@2x.jpg 2x"
                  media="(min-resolution: 2dppx)"
                />
                <Image
                  src="/images/about-me2.jpg"
                  alt="Stylish People "
                  width={217}
                  height={241}
                  style={{
                    width: "100%",
                    minWidth: "177px",
                    height: "auto",
                    minHeight: "201px",
                  }}
                />
              </picture>
              <RectangleIcon className="absolute -top-2 -left-2 rotate-[270deg]" />
              <RectangleIcon className="absolute -bottom-2 -left-2 rotate-180" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
