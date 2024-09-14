"use client";

import {
  BurgerProvider,
  useBurgerContext,
} from "@/components/common/Providers/BurgerProvider";
import Icon from "@/components/features/Icon";

import BurgerMenu from "./BurgerMenu";

export default function Burger() {
  return (
    <BurgerProvider>
      <Burger.Button />
      <BurgerMenu />
    </BurgerProvider>
  );
}

Burger.Button = function BurgerButton() {
  const { toggleMenu } = useBurgerContext();

  return (
    <button
      className="z-20 pl-5 py-1"
      aria-label="Toggle Menu"
      onClick={toggleMenu}
    >
      <Icon width={24} height={24} id="icon-burger" />
    </button>
  );
};
