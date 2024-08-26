import LogoIcon from "@/assets/icons/logos/Logo64.svg";
import { links } from "@/constans/paths";
import { socialLinks } from "@/constans/socials";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Common.menu");
  return (
    <footer>
      <div className="my-container flex flex-col items-center gap-6">
        <Link href="/">
          <LogoIcon width={64} height={64} />
        </Link>
        <nav className=" w-full">
          <ul className="flex flex-col gap-1 w-full mb-6">
            {links.slice(0, 3).map(({ href, key }) => (
              <li key={key}>
                <Link
                  className="text-base block transition-colors duration-150 text-center py-[6px] hover:bg-black hover:text-white cursor-pointer w-full"
                  href={href}
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2">
                <a className="text-sm flex items-center gap-2" href={href}>
                  <Icon width={24} height={24} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
