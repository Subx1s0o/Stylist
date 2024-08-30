import { useTranslations } from "next-intl";

export function useFormTranslations() {
  const t = useTranslations("Contacts.form");

  return {
    placeholders: {
      name: t("placeholders.name"),
      email: t("placeholders.email"),
      link: t("placeholders.link"),
    },
    buttons: {
      submit: t("stable"),
      submitting: t("submitting"),
    },
    validation: {
      nameRequired: t("validation.name.required"),
      nameMinLength: t("validation.name.min-length"),
      namePattern: t("validation.name.pattern"),
      emailRequired: t("validation.email.required"),
      emailMinLength: t("validation.email.min-length"),
      emailPattern: t("validation.email.pattern"),
    },
  };
}
