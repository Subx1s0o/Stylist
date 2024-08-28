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
      reset();
      setTimeout(() => {
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
            className="bg-transparent w-full py-[6px] px-3 placeholder:text-white  text-white duration-200 outline-none border-b-2 border-lightGrey transition-colors text-sm focus:border-b-white"
            type="text"
            {...register("name", {
              required: t("form.validation.required.name"),
            })}
          />
          {errors?.name ? (
            <div className="">
              <p className="text-error text-sm">{errors.name?.message}</p>
            </div>
          ) : null}
        </label>
        <label>
          <input
            placeholder={t("form.placeholders.email")}
            className="bg-transparent w-full  py-[6px] px-3 placeholder:text-white  transition-color duration-200 text-white outline-none border-b-2 border-lightGrey text-sm focus:border-b-white"
            type="email"
            {...register("email", {
              required: t("form.validation.required.email"),
            })}
          />
          {errors?.email ? (
            <div className="">
              <p className="text-error text-sm">{errors.email?.message}</p>
            </div>
          ) : null}
        </label>
        <label>
          <input
            placeholder={t("form.placeholders.link")}
            className="bg-transparent w-full py-[6px] px-3 placeholder:text-white  transition-colors duration-200 text-white outline-none border-b-2 border-lightGrey text-sm focus:border-b-white"
            type="text"
            {...register("link", {
              required: "",
            })}
          />
          {errors?.link ? (
            <div className="">
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
