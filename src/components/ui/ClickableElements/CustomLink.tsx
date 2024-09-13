import { forwardRef, ReactNode, Ref } from "react";

import clsx from "clsx";
import Link from "next/link";

interface LinkProps {
  href: string;
  variant?: "black" | "white" | "outline";
  className?: string;
  children: ReactNode;
  ref?: Ref<HTMLAnchorElement>;
}

const CustomLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, variant = "black", className, children, ...rest }, ref) => {
    const linkClasses = clsx(
      "py-3 inline-block text-center text-base w-full ",
      {
        "bg-black text-white border-none": variant === "black",
        "bg-white text-black border-none": variant === "white",
        "bg-transparent text-black border border-black": variant === "outline",
      },
      className,
    );

    return (
      <Link ref={ref} href={href} className={linkClasses} {...rest}>
        {children}
      </Link>
    );
  },
);

CustomLink.displayName = "CustomLink";

export default CustomLink;
