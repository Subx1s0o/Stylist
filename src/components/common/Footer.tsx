import LogoIcon from "@/assets/icons/logos/Logo64.svg";
import { links } from "@/constans/paths";
import { socialLinks } from "@/constans/socials";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Common.menu");
  return (
    <footer className="border-t border-lightGrey">
      <div className="mx-auto flex flex-col items-center gap-6 p-5">
        <Link href="/">
          <LogoIcon width={64} height={64} />
        </Link>
        <nav className=" w-full flex flex-col gap-6 items-center">
          <ul className="flex flex-col gap-1 w-full ">
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
          <ul className="flex flex-col max-w-[187px] gap-3">
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
        <p className="py-2">© 2024</p>
      </div>
    </footer>
  );
}
