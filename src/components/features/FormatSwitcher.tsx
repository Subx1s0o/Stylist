"use client";

import FormatButton from "@/components/ui/ClickableElements/FormatButton";
import { useTranslations } from "next-intl";
import { startProgress } from "next-nprogress-bar";
import { useRouter, useSearchParams } from "next/navigation";

const FormatSwitcher: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("FormatButtonText");
  const activeFormat = searchParams.get("format") || "online";

  const handleFormatChange = (newFormat: string) => {
    if (newFormat !== activeFormat) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set("format", newFormat);
      startProgress();
      router.push(`/services/style?${newParams.toString()}`);
    }
  };

  return (
    <div className="flex gap-3 mb-3 border-b border-lightGrey">
      <FormatButton
        activeFormat={activeFormat}
        format="online"
        handleFormatChange={handleFormatChange}
      >
        {t("online")}
      </FormatButton>
      <FormatButton
        activeFormat={activeFormat}
        format="offline"
        handleFormatChange={handleFormatChange}
      >
        {t("offline")}
      </FormatButton>
    </div>
  );
};

export default FormatSwitcher;
