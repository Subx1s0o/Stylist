import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

import clsx from "clsx";

interface FormatButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  format: string;
  activeFormat: string;
  variant?: "active" | "inactive";
  children: ReactNode;
  className?: string;
  handleFormatChange: (newFormat: string) => void;
}

const FormatButton = forwardRef<HTMLButtonElement, FormatButtonProps>(
  (
    { format, activeFormat, children, className, handleFormatChange, ...rest },
    ref,
  ) => {
    const buttonClasses = clsx(
      "px-4 py-2 text-base font-exo2 w-full text-center",
      {
        "bg-lightGrey": activeFormat === format,
        "bg-transparent": activeFormat !== format,
      },
      className,
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        onClick={() => handleFormatChange(format)}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

FormatButton.displayName = "FormatButton";

export default FormatButton;
