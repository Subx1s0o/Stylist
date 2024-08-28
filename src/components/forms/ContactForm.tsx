"use client";
import CustomButton from "@/components/ui/CustomButton";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  link?: string;
  email: string;
};

interface ContactFormProps {
  t: (key: string) => string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ContactForm({ t }: ContactFormProps) {
  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    mode: "onBlur",
  });
  const { isSubmitting, errors } = formState;
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 360);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        reset();
        resolve();
        console.log(data);
      }, 2000);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full gap-5 flex flex-col"
    >
      <div className="flex flex-col gap-2">
        {/* Name Input */}
        <label>
          <input
            placeholder={t("form.placeholders.name")}
            className={`bg-transparent rounded-none w-full py-[6px] px-3 placeholder:text-white text-white duration-200 outline-none border-b-2 transition-colors text-sm ${
              errors.name
                ? isSmallScreen
                  ? "border-b-red-500"
                  : "border-b-red-500"
                : "border-b-lightGrey"
            } focus:border-b-white`}
            type="text"
            {...register("name", {
              required: t("form.validation.name.required"),
              minLength: {
                value: 3,
                message: t("form.validation.name.min-length"),
              },
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿĀ-ž]+(?:[\s-][A-Za-zÀ-ÖØ-öø-ÿĀ-ž]+)*$/,
                message: t("form.validation.name.pattern"),
              },
            })}
          />
          {errors.name && !isSmallScreen && (
            <div className="mt-1">
              <p className="text-error text-sm">{errors.name.message}</p>
            </div>
          )}
        </label>

        {/* Email Input */}
        <label>
          <input
            placeholder={t("form.placeholders.email")}
            className={`bg-transparent rounded-none w-full py-[6px] px-3 placeholder:text-white transition-color duration-200 text-white outline-none border-b-2 text-sm ${
              errors.email
                ? isSmallScreen
                  ? "border-b-red-500"
                  : "border-b-red-500"
                : "border-b-lightGrey"
            } focus:border-b-white`}
            type="email"
            {...register("email", {
              required: t("form.validation.email.required"),
              minLength: {
                value: 6,
                message: t("form.validation.email.min-length"),
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                message: t("form.validation.email.pattern"),
              },
            })}
          />
          {errors.email && !isSmallScreen && (
            <div className="mt-1">
              <p className="text-error text-sm">{errors.email.message}</p>
            </div>
          )}
        </label>

        {/* Link Input */}
        <label>
          <input
            placeholder={t("form.placeholders.link")}
            className={`bg-transparent w-full py-[6px] px-3 placeholder:text-white transition-colors duration-200 text-white outline-none border-b-2 rounded-none text-sm ${
              errors.link
                ? isSmallScreen
                  ? "border-b-red-500"
                  : "border-b-red-500"
                : "border-b-lightGrey"
            } focus:border-b-white`}
            type="text"
            {...register("link")}
          />
          {errors.link && !isSmallScreen && (
            <div className="mt-1">
              <p className="text-error text-sm">{errors.link.message}</p>
            </div>
          )}
        </label>
      </div>

      <CustomButton variant="white" type="submit">
        {isSubmitting ? t("form.submitting") : t("form.stable")}
      </CustomButton>
    </form>
  );
}
