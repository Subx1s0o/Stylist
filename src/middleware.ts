import createMiddleware from "next-intl/middleware";
import { defaultLocale, localePrefix, locales } from "./utils/config";

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
});

export const config = {
  matcher: ["/", "/(uk|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
