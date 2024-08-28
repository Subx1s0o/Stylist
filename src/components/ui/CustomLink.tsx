import clsx from "clsx";
import Link from "next/link";
import { forwardRef, ReactNode, Ref } from "react";

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
      "py-3 inline-block text-center text-base w-full border-none",
      {
        "bg-black text-white": variant === "black",
        "bg-white text-black ": variant === "white",
        "bg-transparent text-black border border-black": variant === "outline",
      },
      className
    );

    return (
      <Link ref={ref} href={href} className={linkClasses} {...rest}>
        {children}
      </Link>
    );
  }
);

CustomLink.displayName = "CustomLink";

export default CustomLink;
