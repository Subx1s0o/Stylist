import { Locale } from "@/utils/config";
import { setUserLocale } from "@/utils/locale";
import { useLocale } from "next-intl";

interface Props {
  closeMenu: () => void;
}

export default function MobileLocaleSwitcher({ closeMenu }: Props) {
  const locale = useLocale();

  const changeLocale = (value: string): void => {
    const newLocale = value as Locale;
    if (newLocale === locale) return;
    setUserLocale(newLocale);
    closeMenu();
  };
  return (
    <div className="flex gap-2 justify-center">
      <button
        onClick={() => changeLocale("uk")}
        className={`hover:bg-black text-base-thin hover:text-white transition-colors duration-150  py-[6px] px-4 ${
          locale === "uk"
            ? "bg-darkGrey text-white"
            : "bg-transparent text-black"
        }`}
      >
        UA
      </button>
      <button
        onClick={() => changeLocale("en")}
        className={`hover:bg-black text-base-thin hover:text-white transition-colors duration-150  py-[6px] px-4 ${
          locale === "en"
            ? "bg-darkGrey text-white"
            : "bg-transparent text-black"
        }`}
      >
        EN
      </button>
    </div>
  );
}
