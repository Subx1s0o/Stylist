"use client";

import { useLockBodyScroll } from "react-use";

import { animated, useTransition } from "@react-spring/web";
import { useTranslations } from "next-intl";

import Icon from "../features/Icon";
import CustomButton from "../ui/ClickableElements/CustomButton";

interface ContactModalProps {
  closeModal: () => void;
  type: "success" | "error";
  isOpen: boolean;
}

export default function ContactModal({
  closeModal,
  type,
  isOpen,
}: ContactModalProps) {
  const t = useTranslations("Common.ContactsModal");

  const transitions = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { tension: 220, friction: 20, duration: 150 },
    onRest: () => {
      if (!isOpen) closeModal();
    },
  });

  const title = type === "success" ? t("success.title") : t("error.title");
  const message =
    type === "success" ? t("success.message") : t("error.message");
  const subtitle = type === "success" ? t("success.subtitle") : "";

  useLockBodyScroll(isOpen);

  return (
    <>
      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="fixed inset-0 flex items-center justify-center bg-primary-black z-[300]"
            >
              <animated.div
                className="p-10 w-[calc(100%-32px)] bg-white flex flex-col justify-center items-center"
                style={styles}
              >
                <div className="mb-5 flex flex-col items-center">
                  <div className="max-w-[220px] mb-[14px]">
                    <h2 className="font-exo2 text-base text-center">{title}</h2>
                    {subtitle && (
                      <h2 className="font-exo2 text-base text-center">
                        {subtitle}
                      </h2>
                    )}
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
          ),
      )}
    </>
  );
}
