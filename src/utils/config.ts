import { LocalePrefix } from "next-intl/routing";

export const defaultLocale = "ua" as const;
export const locales = ["en", "ua"] as const;

export const localePrefix: LocalePrefix<typeof locales> = "never";
