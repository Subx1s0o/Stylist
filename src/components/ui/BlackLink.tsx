import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export default function BlackLink({ href, children }: Props) {
  return (
    <Link
      className="py-3 inline-block bg-black text-center text-base text-white w-full"
      href={href}
    >
      {children}
    </Link>
  );
}
