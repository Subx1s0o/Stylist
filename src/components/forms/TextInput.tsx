"use client";

import { ComponentProps } from "react";
import { Control, useController } from "react-hook-form";
import { useMedia } from "react-use";

/* eslint-disable @typescript-eslint/no-explicit-any */

type TextInputProps = ComponentProps<"input"> & {
  control: Control<any>;
  label?: string;
  name: string;
};

export default function TextInput({
  control,
  label,
  name,

  ...inputProps
}: TextInputProps) {
  const {
    formState: { errors },
  } = useController({ control, name });
  const isSmallScreen = useMedia("(max-width:360px)", false);
  return (
    <div className="flex flex-col gap-1">
      {label && <label>{label}</label>}
      <div className="relative">
        <input
          {...control.register(name)}
          {...inputProps}
          className={`bg-transparent rounded-none w-full py-[6px] px-3 placeholder:text-white transition-color duration-200 text-white outline-none border-b-2 text-smd ${
            errors[name] ? "border-b-red-500" : "border-b-lightGrey"
          } focus:border-b-white`}
        />
      </div>
      {errors[name] && !isSmallScreen && (
        <div className="mt-1 ml-3">
          <p className="text-error text-smd">
            {errors[name].message?.toString()}
          </p>
        </div>
      )}
    </div>
  );
}
