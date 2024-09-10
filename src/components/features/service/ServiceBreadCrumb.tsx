"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function ServiceBreadCrumb({ title }: { title: string }) {
  const t = useTranslations("ServicePage.Makeup");
  const router = useRouter();
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    router.back();
  };

  return (
    <nav className="mb-3">
      <ul className="flex">
        <li>
          <Link href="/services">{t("breadcrumbs.first-link")}</Link>
        </li>
        <li>
          <span>&nbsp;/&nbsp;</span>
        </li>
        <li>
          <Link href="/services/makeup" onClick={handleBack}>
            {t("breadcrumbs.second-link")}
          </Link>
        </li>
        <li>
          <span>&nbsp;/&nbsp;</span>
        </li>
        <li>
          <p>{title}</p>
        </li>
      </ul>
    </nav>
  );
}
