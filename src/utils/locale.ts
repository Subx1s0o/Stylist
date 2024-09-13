"use server";

import { cookies } from "next/headers";

import { defaultLocale, Locale } from "./config";

const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  const cookie = cookies().get(COOKIE_NAME);
  return cookie?.value || defaultLocale;
}
export async function setUserLocale(locale: Locale) {
  cookies().set(COOKIE_NAME, locale);
}
