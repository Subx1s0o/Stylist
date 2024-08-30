"use client";
import clsx from "clsx";
// import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes, forwardRef, ReactNode, Ref } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "black" | "white" | "outline";
  className?: string;
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
}

const PreviousButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "black", className, children, ...rest }, ref) => {
    // const router = useRouter();
    const buttonClasses = clsx(
      "py-3 px-6  text-base font-medium w-full text-center ",
      {
        "bg-black text-white border-none": variant === "black",
        "bg-white text-black border-none": variant === "white",
        "bg-transparent text-black border border-black": variant === "outline",
      },
      className
    );

    return (
      <button ref={ref} className={buttonClasses} {...rest}>
        {children}
      </button>
    );
  }
);

PreviousButton.displayName = "PreviousButton";

export default PreviousButton;
