import { links } from "@/constans/paths";
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
        {links.map(({ href, key }) => (
          <li className="py-[6px]" key={key}>
            <Link className="text-base-thin" href={href} onClick={onLinkClick}>
              {t(key)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
