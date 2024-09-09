import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ServicesBreadcrumb({
  category,
}: {
  category: "Style" | "Makeup";
}) {
  const t = useTranslations(category);
  return (
    <nav className="mb-5">
      <ul className="flex">
        <li>
          <Link href="/services">{t("breadcrumbs.first-link")}</Link>
        </li>
        <li>
          <span>&nbsp;/&nbsp;</span>
        </li>
        <li>
          <Link href="/services/makeup">{t("breadcrumbs.second-link")}</Link>
        </li>
      </ul>
    </nav>
  );
}
