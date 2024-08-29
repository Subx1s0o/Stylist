"use client";
import BurgerIcon from "@/assets/icons/ui/burger.svg";
import useOutsideClick from "@/hooks/useOutsideClick";
import { AnimatePresence, LazyMotion, m } from "framer-motion";
import { useRef, useState } from "react";
import MobileLocaleSwitcher from "../localeSwitcher/MobileLocaleSwitcher";
import BurgerMenuLinks from "./BurgerMenuLinks";

export default function Burger() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const loadFeatures = () =>
    import("@/utils/framer.ts").then((res) => res.default);

  useOutsideClick(menuRef, () => setOpen(false));

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <div ref={menuRef} className="relative inline-flex">
      <button className="z-20" aria-label="Toggle Menu" onClick={toggleMenu}>
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
              className="absolute top-0 right-0 pt-[68px] pb-4 px-4 bg-white z-10"
            >
              <BurgerMenuLinks onLinkClick={() => setOpen(false)} />
              <MobileLocaleSwitcher closeMenu={closeMenu} />
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </div>
  );
}
