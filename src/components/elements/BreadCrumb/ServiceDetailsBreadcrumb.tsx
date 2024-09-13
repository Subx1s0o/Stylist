import { useTranslations } from "next-intl";

import BreadcrumbItem from "./BreadCrumbItem";

export default function ServiceDetailsBreadCrumb({
  title,
  category,
}: {
  title: string;
  category: "Makeup" | "Style";
}) {
  const t = useTranslations(`ServicePage.${category}`);

  return (
    <nav className="mb-3">
      <ul className="flex">
        <BreadcrumbItem href="/services">
          {t("breadcrumbs.first-link")}
        </BreadcrumbItem>
        <BreadcrumbItem href={`/services/${category.toLowerCase()}`}>
          {t("breadcrumbs.second-link")}
        </BreadcrumbItem>
        <BreadcrumbItem href="#" isLast={true}>
          {title}
        </BreadcrumbItem>
      </ul>
    </nav>
  );
}
