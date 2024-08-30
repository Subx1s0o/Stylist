"use client";
import BurgerIcon from "@/assets/icons/ui/burger.svg";
import { AnimatePresence, LazyMotion, m } from "framer-motion";
import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import MobileLocaleSwitcher from "../localeSwitcher/MobileLocaleSwitcher";
import BurgerMenuLinks from "./BurgerMenuLinks";

export default function Burger() {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useClickAway(ref, () => setOpen(false));

  const loadFeatures = () =>
    import("@/utils/framer.ts").then((res) => res.default);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative inline-flex">
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
