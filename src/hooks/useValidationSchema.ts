import { useFormTranslations } from "@/hooks/useFormTranslations";
import { z } from "zod";

export default function useValidationSchema() {
  const { validation } = useFormTranslations();

  return z.object({
    name: z
      .string()
      .min(3, validation.nameMinLength)
      .regex(
        /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+(?:[\s-][A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+)*$/,
        validation.namePattern,
      )
      .nonempty(validation.nameRequired),
    email: z
      .string()
      .email(validation.emailPattern)
      .min(6, validation.emailMinLength)
      .nonempty(validation.emailRequired),
    link: z.string().optional(),
  });
}
