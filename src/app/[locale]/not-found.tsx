import { useTranslations } from "next-intl";
import Link from "next/link";
export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <div className="my-container my-auto">
      <h1 className="font-exo2 text-xl text-center mb-5">404</h1>
      <p className="font-exo2 text-base text-center mb-[60px]">
        {t("description")}
      </p>
      <div className="">
        <Link
          className="py-3 inline-block bg-black text-center text-base text-white w-full"
          href="/"
        >
          {t("button-title")}
        </Link>
      </div>
    </div>
  );
}
