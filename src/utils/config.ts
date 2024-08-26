import { LocalePrefix } from "next-intl/routing";

export const defaultLocale = "uk" as const;
export const locales = ["en", "uk"] as const;

export const localePrefix: LocalePrefix<typeof locales> = "never";
