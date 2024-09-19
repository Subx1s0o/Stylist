"use client";

import { animated, useSpring } from "@react-spring/web";
import { useTranslations } from "next-intl";

import Icon from "../features/Icon";
import CustomButton from "../ui/ClickableElements/CustomButton";

interface ContactModalProps {
  isOpen: boolean;
  closeModal: () => void;
  type: "success" | "error";
}

export default function ContactModal({
  isOpen,
  closeModal,
  type,
}: ContactModalProps) {
  const t = useTranslations("Common.ContactsModal");

  const { opacity, transform } = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0)" : "translateY(-50%)",
    config: { tension: 220, friction: 20 },
  });

  const title = type === "success" ? t("success.title") : t("error.title");
  const message =
    type === "success" ? t("success.message") : t("error.message");
  const subtitle = type === "success" ? t("success.subtitle") : "";
  return (
    <animated.div
      style={{
        opacity,
        transform,
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: "100",
      }}
    >
      <animated.div
        className="p-10 w-[calc(100%-32px)] bg-white flex flex-col justify-center items-center"
        style={{
          opacity,
          transform,
        }}
      >
        <div className=" mb-5 flex flex-col items-center">
          <div className="max-w-[220px] mb-[14px]">
            <h2 className="font-exo2 text-base text-center">{title}</h2>
            <h2 className="font-exo2 text-base text-center">{subtitle}</h2>
          </div>
          <div className="flex gap-1">
            <p className="text-sm text-center">{message}</p>
            <Icon
              id="icon-heart"
              width={24}
              height={24}
              className="fill-black"
            />
          </div>
        </div>
        <CustomButton variant="outline" onClick={closeModal}>
          {t("close")}
        </CustomButton>
      </animated.div>
    </animated.div>
  );
}
