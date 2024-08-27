import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
}

export default function ServicesSection({ className }: Props) {
  const t = useTranslations("Services");
  return (
    <section className={`pb-[60px] ${className ? className : ""}`}>
      <div className="my-container">
        <h2 className="text-md font-exo2 text-center mb-5">{t("title")}</h2>
        <p className="mb-3 text-sm">{t("description")}</p>
        <ul className="flex flex-col gap-2">
          <li className="relative">
            <Link href="/services/style">
              <picture>
                <source
                  srcSet="/images/services/service@2x.jpg 2x"
                  media="(min-resolution: 2dppx)"
                />
                <Image
                  width={343}
                  height={288}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src="/images/services/service.jpg"
                  alt="makeup"
                ></Image>
              </picture>
              <div className=" py-[14px] absolute bottom-10 w-full bg-primary-black">
                <p className="text-white text-center text-base">{t("style")}</p>
              </div>
            </Link>
          </li>
          <li className="relative">
            <Link href="/services/makeup">
              <picture>
                <source
                  srcSet="/images/services/service2@2x.jpg 2x"
                  media="(min-resolution: 2dppx)"
                />
                <Image
                  width={343}
                  height={288}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  src="/images/services/service.jpg"
                  alt="styling"
                ></Image>
              </picture>
              <div className=" py-[14px] absolute bottom-10 w-full bg-primary-black">
                <p className="text-white text-center text-base">
                  {t("makeup")}
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
