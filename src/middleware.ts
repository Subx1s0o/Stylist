import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./utils/config";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "never",
});

export const config = {
  matcher: ["/", "/(uk|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
