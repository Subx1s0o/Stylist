"use client";
import BurgerIcon from "@/assets/icons/burger.svg";
import { AnimatePresence, LazyMotion, m } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MobileLocaleSwitcher from "./localeSwitcher/MobileLocaleSwitcher.tsx";

export default function Burger() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("Common.menu");
  const menuRef = useRef<HTMLDivElement>(null);
  const loadFeatures = () =>
    import("../features/framerFeatures.ts").then((res) => res.default);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div ref={menuRef} className="relative inline-flex">
      <button className="z-10" onClick={toggleMenu}>
        <BurgerIcon />
      </button>
      <LazyMotion features={loadFeatures}>
        <AnimatePresence>
          {open && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 right-0 pt-[68px] pb-4 px-4 bg-white"
            >
              <nav className="mb-1">
                <ul className="flex flex-col gap-1">
                  <li className="py-[6px] ">
                    <Link
                      className="text-MobileMenuLink"
                      href="/about-me"
                      onClick={handleLinkClick}
                    >
                      {t("about-me")}
                    </Link>
                  </li>
                  <li className="py-[6px] ">
                    <Link
                      className="text-MobileMenuLink"
                      href="/services"
                      onClick={handleLinkClick}
                    >
                      {t("services")}
                    </Link>
                  </li>
                  <li className="py-[6px] ">
                    <Link
                      className="text-MobileMenuLink"
                      href="/portfolio"
                      onClick={handleLinkClick}
                    >
                      {t("portfolio")}
                    </Link>
                  </li>
                  <li className="py-[6px] ">
                    <Link
                      className="text-MobileMenuLink"
                      href="/contacts"
                      onClick={handleLinkClick}
                    >
                      {t("contacts")}
                    </Link>
                  </li>
                </ul>
              </nav>
              <MobileLocaleSwitcher />
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}
