import { useRef, useState } from "react";
import { useClickAway } from "react-use";

export function useBurgerMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  useClickAway(ref, closeMenu);

  return {
    open,
    toggleMenu,
    closeMenu,
    ref,
  };
}
