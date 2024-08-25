"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function MobileLocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const changeLocale = (newLocale: string): void => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path="/"; SameSite=Lax`;
    router.refresh();
  };

  return (
    <div className="flex gap-2 justify-center">
      <button
        onClick={() => changeLocale("ua")}
        className={`py-[6px] px-4 ${
          locale === "ua"
            ? "bg-darkGrey text-white"
            : "bg-transparent text-black"
        }`}
      >
        UA
      </button>
      <button
        onClick={() => changeLocale("en")}
        className={`py-[6px] px-4 ${
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
