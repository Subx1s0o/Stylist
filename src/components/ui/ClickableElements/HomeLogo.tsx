"use client";

import { PropsWithChildren } from "react";

import { startProgress } from "next-nprogress-bar";
import { usePathname, useRouter } from "next/navigation";

export default function HomeLogo({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    if (pathname === "/" || pathname === "/en") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      startProgress();
      router.replace("/");
    }
  };

  return (
    <button type="button" aria-label="logotype" onClick={handleClick}>
      {children}
    </button>
  );
}
