import { SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
  name: string;
  link?: string;
  email: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ContactForm({ t }: any) {
  const { register, handleSubmit, formState, reset } = useForm<FormValues>({
    mode: "onBlur",
  });
  const { isSubmitting, errors } = formState;

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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
      <div className="flex flex-col mb-5 gap-2">
        <label>
          <input
            placeholder={t("form.placeholders.name")}
            className="bg-transparent rounded-none w-full py-[6px] px-3 placeholder:text-white text-white duration-200 outline-none border-b-2 border-b-lightGrey transition-colors text-sm focus:border-b-white"
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
          {errors?.name ? (
            <div className="mt-1">
              <p className="text-error text-sm">{errors.name?.message}</p>
            </div>
          ) : null}
        </label>

        <label>
          <input
            placeholder={t("form.placeholders.email")}
            className="bg-transparent  rounded-none w-full py-[6px] px-3 placeholder:text-white  transition-color duration-200 text-white outline-none border-b-2 border-b-lightGrey text-sm focus:border-b-white"
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
          {errors?.email ? (
            <div className="mt-1">
              <p className="text-error text-sm">{errors.email?.message}</p>
            </div>
          ) : null}
        </label>

        <label>
          <input
            placeholder={t("form.placeholders.link")}
            className="bg-transparent w-full py-[6px] px-3 placeholder:text-white transition-colors duration-200 text-white outline-none  border-b-2 border-lightGrey text-sm focus:border-b-white"
            type="text"
            {...register("link", {
              required: "",
            })}
          />
          {errors?.link ? (
            <div className="mt-1">
              <p></p>
            </div>
          ) : null}
        </label>
      </div>

      <button
        className="py-3 inline-block bg-white text-center text-base text-black w-full"
        type="submit"
      >
        {isSubmitting ? t("form.submitting") : t("form.stable")}
      </button>
    </form>
  );
}
