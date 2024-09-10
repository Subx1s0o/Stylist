import Icon from "@/components/features/Icon";
import { links } from "@/constans/paths";
import { socialLinks } from "@/constans/socials";
import { useTranslations } from "next-intl";
import Link from "next/link";
import HomeLogo from "../ui/HomeLogo";
export default function Footer() {
  const t = useTranslations("Common.menu");
  return (
    <footer className="border-t border-lightGrey">
      <div className="mx-auto flex flex-col items-center gap-6 p-5">
        <HomeLogo>
          <Icon width={64} height={64} id="icon-Logo" />
        </HomeLogo>
        <nav className=" w-full flex flex-col gap-6 items-center">
          <ul className="flex flex-col gap-1 w-full ">
            {links.slice(0, 2).map(({ href, key }) => (
              <li key={key}>
                <Link
                  className="text-base block  text-center py-[6px] cursor-pointer w-full"
                  href={href}
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
          <address className="not-italic">
            <ul className="flex flex-col max-w-[187px] gap-3">
              {socialLinks.map(({ href, label, icon }) => (
                <li key={label} className="flex items-center gap-2">
                  <a
                    className="text-sm flex items-center gap-2"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon width={24} height={24} id={icon} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </address>
        </nav>
        <p className="py-2">© 2024</p>
      </div>
    </footer>
  );
}
