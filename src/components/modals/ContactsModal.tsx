"use client";

import { useState } from "react";

import { animated, useSpring } from "@react-spring/web";
import { useTranslations } from "next-intl";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
}

export default function ContactModal({
  isOpen,
  onClose,
  type,
}: ContactModalProps) {
  const t = useTranslations();
  const [show, setShow] = useState(isOpen);

  const { opacity, transform } = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "translateY(0)" : "translateY(-50%)",
    config: { tension: 220, friction: 20 },
    onRest: () => {
      if (!show) onClose();
    },
  });

  if (isOpen && !show) {
    setShow(true);
  }

  const closeModal = () => {
    setShow(false);
  };

  if (!isOpen && show) {
    return null;
  }

  const title =
    type === "success"
      ? t("ContactsModal.success.title")
      : t("ContactsModal.error.title");
  const message =
    type === "success"
      ? t("ContactsModal.success.message")
      : t("ContactsModal.error.message");

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
        className={"p-6 rounded shadow-lg "}
        style={{
          opacity,
          transform,
        }}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{message}</p>
        <button
          onClick={closeModal}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {t("ContactsModal.close")}
        </button>
      </animated.div>
    </animated.div>
  );
}
