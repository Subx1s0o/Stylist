"use client";

import { useEffect, useState } from "react";

import { animated, useSpring } from "@react-spring/web";
import { useTranslations } from "next-intl";

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
  const [show, setShow] = useState(isOpen);

  const { opacity, transform } = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(-50%)",
    config: { tension: 220, friction: 20 },
    onRest: () => {
      if (!show && !isOpen) closeModal();
    },
  });

  useEffect(() => {
    if (isOpen) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!show && !isOpen) {
    return null;
  }

  const title = type === "success" ? t("success.title") : t("error.title");
  const message =
    type === "success" ? t("success.message") : t("error.message");

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
      }}
    >
      <animated.div
        className={"p-6 rounded shadow-lg bg-white"}
        style={{
          opacity,
          transform,
        }}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{message}</p>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-black text-white rounded"
        >
          {t("close")}
        </button>
      </animated.div>
    </animated.div>
  );
}
