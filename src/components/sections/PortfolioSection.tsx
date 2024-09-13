import CustomLink from "@/components/ui/ClickableElements/CustomLink";
import { images } from "@/constans/portfolio-images";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PortfolioSection() {
  const t = useTranslations("Home.portfolio");
  return (
    <section className="pb-section">
      <div className="my-container">
        <h2 className="text-md font-exo2 text-center mb-5">{t("title")}</h2>
        <p className="mb-3 text-sm">{t("description")}</p>
        <ul className="grid grid-cols-2 grid-rows-2 gap-2 mb-3">
          {images.map((img, index) => (
            <li key={index} className={img.span}>
              <Image
                width={img.width}
                height={img.height}
                style={{ width: "100%", height: "100%" }}
                src={img.src}
                alt={`portfolio image ${index + 1}`}
                priority
              />
            </li>
          ))}
        </ul>
        <CustomLink variant="outline" href="/portfolio">
          {t("see-more")}
        </CustomLink>
      </div>
    </section>
  );
}
