import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  onLinkClick: () => void;
};

export default function BurgerMenuLinks({ onLinkClick }: Props) {
  const t = useTranslations("Common.menu");

  return (
    <nav className="mb-1">
      <ul className="flex flex-col gap-1">
        <li className="py-[6px]">
          <Link
            className="text-MobileMenuLink"
            href="/about-me"
            onClick={onLinkClick}
          >
            {t("about-me")}
          </Link>
        </li>
        <li className="py-[6px]">
          <Link
            className="text-MobileMenuLink"
            href="/services"
            onClick={onLinkClick}
          >
            {t("services")}
          </Link>
        </li>
        <li className="py-[6px]">
          <Link
            className="text-MobileMenuLink"
            href="/portfolio"
            onClick={onLinkClick}
          >
            {t("portfolio")}
          </Link>
        </li>
        <li className="py-[6px]">
          <Link
            className="text-MobileMenuLink"
            href="/contacts"
            onClick={onLinkClick}
          >
            {t("contacts")}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
