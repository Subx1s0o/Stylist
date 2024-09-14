import { useTranslations } from "next-intl";
import Image from "next/image";

import Icon from "@/components/features/Icon";

export default function AboutMeSection() {
  const t = useTranslations("Home.about-me");
  return (
    <section className="pb-section">
      <div className="my-container">
        <h2 className="text-md font-exo2 text-center mb-5">{t("title")}</h2>
        <p className="mb-[17px] max-w-[195px] text-sm">{t("first-text")}</p>
        <ul className="grid grid-rows-2 gap-[22px] ">
          <li className="grid grid-cols-[1fr_1fr] gap-4 items-center">
            <div className="relative">
              <Image
                src="/images/about/about-me1.avif"
                alt="Stylish People "
                width={174}
                height={272}
                style={{
                  width: "100%",
                  minWidth: "134px",
                  height: "auto",
                  minHeight: "232px",
                }}
                priority
              />

              <Icon
                id="icon-about-rectangle"
                width={15}
                height={15}
                className="absolute -top-xs -right-xs"
              />
              <Icon
                id="icon-about-rectangle"
                width={15}
                height={15}
                className="absolute -bottom-xs -right-xs rotate-90"
              />
            </div>

            <p className="text-sm max-w-[153px]">{t("second-text")}</p>
          </li>
          <li className="grid grid-cols-[1fr_2fr]  gap-4 items-center">
            <p className="text-sm">{t("third-text")}</p>

            <div className="relative">
              <Image
                src="/images/about/about-me2.avif"
                alt="Stylish People "
                width={217}
                height={241}
                style={{
                  width: "100%",
                  minWidth: "177px",
                  height: "auto",
                  minHeight: "201px",
                }}
                priority
              />

              <Icon
                id="icon-about-rectangle"
                width={15}
                height={15}
                className="absolute -top-xs -left-xs rotate-[270deg]"
              />
              <Icon
                id="icon-about-rectangle"
                width={15}
                height={15}
                className="absolute -bottom-xs -left-xs rotate-180"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
