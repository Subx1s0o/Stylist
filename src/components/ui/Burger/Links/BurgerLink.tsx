import { useTranslations } from "next-intl";
import Link from "next/link";

interface BurgerLinkProps {
  href: string;
  textKey: string;
  onLinkClick: () => void;
}

export default function BurgerLink({
  href,
  textKey,
  onLinkClick,
}: BurgerLinkProps) {
  const t = useTranslations("Common.menu");
  return (
    <li className="py-[6px]">
      <Link className="text-base-thin" href={href} onClick={onLinkClick}>
        {t(textKey)}
      </Link>
    </li>
  );
}
