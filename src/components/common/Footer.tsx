import LogoIcon from "@/assets/icons/Logo64.svg";
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
            <li>
              <Link
                className="text-MobileMenuLink  block transition-colors duration-150  text-center py-[6px] hover:bg-black hover:text-white cursor-pointer w-full"
                href="/about-me"
              >
                {t("about-me")}
              </Link>
            </li>
            <li>
              <Link
                className="text-MobileMenuLink block transition-colors duration-150  text-center py-[6px] hover:bg-black hover:text-white cursor-pointer w-full"
                href="/services"
              >
                {t("services")}
              </Link>
            </li>
            <li>
              <Link
                className="text-MobileMenuLink block transition-colors duration-150  text-center py-[6px] hover:bg-black hover:text-white cursor-pointer w-full"
                href="/portfolio"
              >
                {t("portfolio")}
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center">
            <li className="">
              <a
                className="text-mobileRegular"
                href="https://www.instagram.com/manya.chorna"
                target="_blank"
                rel="noopener noreferrer"
              >
                manya.chorna
              </a>
            </li>
            <li className="">
              <a
                className="text-mobileRegular"
                href="tel:380966938687"
                target="_blank"
                rel="noopener noreferrer"
              >
                0966938687
              </a>
            </li>
            <li className="">
              <a
                className="text-mobileRegular"
                href="https://t.me/marysyachorna"
                target="_blank"
                rel="noopener noreferrer"
              >
                marysyachorna
              </a>
            </li>
            <li className="">
              <a
                className="text-mobileRegular"
                href="mail:manya.chorna@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                manya.chorna@gmail.com
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
