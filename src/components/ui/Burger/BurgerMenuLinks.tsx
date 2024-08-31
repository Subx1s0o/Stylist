import { links } from "@/constans/paths";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  onLinkClick: () => void;
};

export default function BurgerMenuLinks({ onLinkClick }: Props) {
  const t = useTranslations("Common.menu");
  const locale = useLocale();
  return (
    <nav className="mb-1">
      <ul className="flex flex-col gap-1">
        {links.map(({ href, key }) => (
          <li className="py-[6px]" key={key}>
            <Link
              className="text-base-thin"
              href={href}
              onClick={onLinkClick}
              locale={locale}
            >
              {t(key)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
