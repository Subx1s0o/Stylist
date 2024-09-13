import BreadcrumbItem from "@/components/elements/BreadCrumb/BreadCrumbItem";
import { useTranslations } from "next-intl";

export default function ServicesBreadcrumb({
  category,
}: {
  category: "Style" | "Makeup";
}) {
  const t = useTranslations(category);

  return (
    <nav className="mb-5">
      <ul className="flex">
        <BreadcrumbItem href="/services">
          {t("breadcrumbs.first-link")}
        </BreadcrumbItem>
        <BreadcrumbItem href={`/services/${category.toLowerCase()}`}>
          {t("breadcrumbs.second-link")}
        </BreadcrumbItem>
      </ul>
    </nav>
  );
}
