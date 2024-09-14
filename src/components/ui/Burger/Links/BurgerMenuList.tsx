import { links } from "@/constans/paths";

import BurgerLink from "./BurgerLink";

type Props = {
  onLinkClick: () => void;
};

export default function BurgerMenuList({ onLinkClick }: Props) {
  return (
    <nav className="mb-1">
      <ul className="flex flex-col gap-1">
        {links.map(({ href, textKey }) => (
          <BurgerLink
            href={href}
            textKey={textKey}
            onLinkClick={onLinkClick}
            key={href}
          />
        ))}
      </ul>
    </nav>
  );
}
