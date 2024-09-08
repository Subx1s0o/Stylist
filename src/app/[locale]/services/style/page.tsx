import { useTranslations } from "next-intl";
import Link from "next/link";

export default function StyleUpPage() {
  const t = useTranslations("Style");
  return (
    <section className="pt-[68px] pb-section">
      <div className="my-container">
        <h1 className="font-exo2 text-md text-center mb-5">{t("title")}</h1>
        <nav className="mb-5">
          <ul className="flex ">
            <li>
              <Link href="/services">{t("breadcrumbs.first-link")}</Link>
            </li>
            <span>&nbsp;/&nbsp;</span>
            <li>
              <Link href="/services/style">{t("breadcrumbs.second-link")}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
