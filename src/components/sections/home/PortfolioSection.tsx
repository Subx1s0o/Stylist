import CustomLink from "@/components/ui/CustomLink";
import { useTranslations } from "next-intl";
import Image from "next/image";

const images = [
  {
    src: "/images/portfolio/portfolio.avif",
    width: 168,
    height: 214,
    span: "row-span-2",
  },
  {
    src: "/images/portfolio/portfolio2.avif",
    width: 167,
    height: 258,
    span: "row-span-3",
  },
  {
    src: "/images/portfolio/portfolio3.avif",
    width: 168,
    height: 268,
    span: "row-span-3",
  },
  {
    src: "/images/portfolio/portfolio4.avif",
    width: 168,
    height: 224,
    span: "row-span-2",
  },
];

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
                style={{ width: "100%", height: "auto" }}
                src={img.src}
                alt={`portfolio image ${index + 1}`}
                layout="responsive"
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
