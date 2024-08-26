import BlackLink from "@/components/ui/BlackLink";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function HeroSection() {
  const t = useTranslations("Home");
  return (
    <section>
      <div className="relative mb-3">
        <picture>
          <source
            srcSet="/images/hero@2x.jpg 2x"
            media="(min-resolution: 2dppx)"
          />

          <Image
            src="/images/hero.jpg"
            alt="hero image"
            width={375}
            height={620}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </picture>

        <div className="absolute top-2 left-3 max-w-[168px]">
          <h1 className="text-xmd font-exo2 text-white">{t("hero.welcome")}</h1>
        </div>
        <div className="absolute bottom-[60px] right-[79px] max-w-[139px]">
          <p className="text-base font-exo2 text-white">
            {t("hero.description")}
          </p>
        </div>
      </div>
      <div className="my-container">
        <BlackLink href="/contacts">{t("advice")}</BlackLink>
      </div>
    </section>
  );
}
