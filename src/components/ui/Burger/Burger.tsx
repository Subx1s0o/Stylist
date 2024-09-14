"use client";

import { useRef, useState } from "react";
import { useClickAway } from "react-use";

import { animated, useTransition } from "@react-spring/web";

import Icon from "@/components/features/Icon";

import MobileLocaleSwitcher from "../localeSwitcher/MobileLocaleSwitcher";
import BurgerMenuLinks from "./BurgerMenuLinks";

export default function Burger() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => setOpen(false));

  const transitions = useTransition(open, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 100 },
  });

  return (
    <div ref={ref} className="relative inline-flex">
      <button
        className="z-20 pl-5 py-1"
        aria-label="Toggle Menu"
        onClick={toggleMenu}
      >
        <Icon width={24} height={24} id="icon-burger" />
      </button>

      {transitions(
        (styles, item) =>
          item && (
            <animated.div
              style={styles}
              className="absolute top-0 right-0 pt-[68px] pb-4 px-4 bg-white z-10"
            >
              <BurgerMenuLinks onLinkClick={() => setOpen(false)} />
              <MobileLocaleSwitcher closeMenu={closeMenu} />
            </animated.div>
          ),
      )}
    </div>
  );
}
