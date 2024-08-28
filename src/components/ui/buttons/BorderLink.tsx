import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export default function WhiteLink({ href, children }: Props) {
  return (
    <Link
      className="py-3 inline-block bg-transparent text-center border border-black text-bas w-full"
      href={href}
    >
      {children}
    </Link>
  );
}
