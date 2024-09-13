"use client";

import { startProgress } from "next-nprogress-bar";
import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren } from "react";

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
