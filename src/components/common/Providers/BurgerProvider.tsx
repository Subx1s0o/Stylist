"use client";

import { createContext, ReactNode, useContext } from "react";

import { useBurgerMenu } from "@/hooks/useBurgerMenu";

type BurgerMenuContextType = {
  open: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const BurgerMenuContext = createContext<BurgerMenuContextType | null>(null);

export function useBurgerContext() {
  const context = useContext(BurgerMenuContext);
  if (!context) {
    throw new Error("useBurgerContext must be used within a BurgerProvider");
  }
  return context;
}

export function BurgerProvider({ children }: { children: ReactNode }) {
  const { open, toggleMenu, closeMenu, ref } = useBurgerMenu();

  return (
    <BurgerMenuContext.Provider value={{ open, toggleMenu, closeMenu }}>
      <div ref={ref} className="relative inline-flex">
        {children}
      </div>
    </BurgerMenuContext.Provider>
  );
}
