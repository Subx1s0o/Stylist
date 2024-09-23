"use client";

import { SubmitHandler, useForm } from "react-hook-form";

import { ContactsData } from "@/types/contactsData.interface";
import { FormValues } from "@/types/form.interfaces";

import CustomButton from "@/components/ui/ClickableElements/CustomButton";
import { useFormTranslations } from "@/hooks/useFormTranslations";
import useModal from "@/hooks/useModal";
import useValidationSchema from "@/hooks/useValidationSchema";
import sendContactsData from "@/utils/send-contact";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";

import TextInput from "./TextInput";

const ContactsModal = dynamic(
  () => import("@/components/modals/ContactsModal"),
);

export default function ContactForm() {
  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = useForm<FormValues>({
    mode: "onBlur",
    resolver: zodResolver(useValidationSchema()),
  });

  const { placeholders, buttons } = useFormTranslations();
  const { modalState, handleCloseModal, setModalState } = useModal();

  const onSubmit: SubmitHandler<FormValues> = async (data: ContactsData) => {
    try {
      await sendContactsData(data);
      setModalState({ isOpen: true, type: "success" });
    } catch (error) {
      console.log(error);
      setModalState({ isOpen: true, type: "error" });
    }
  };

  return (
    <>
      {modalState && (
        <ContactsModal
          closeModal={handleCloseModal}
          type={modalState.type}
          isOpen={modalState.isOpen}
        />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full gap-5 flex flex-col"
      >
        <div className="flex flex-col gap-2">
          <TextInput
            control={control}
            name="name"
            placeholder={placeholders.name}
          />
          <TextInput
            control={control}
            name="email"
            placeholder={placeholders.email}
          />
          <TextInput
            control={control}
            name="link"
            placeholder={placeholders.link}
          />
        </div>

        <CustomButton variant="white" type="submit">
          {isSubmitting ? buttons.submitting : buttons.submit}
        </CustomButton>
      </form>
    </>
  );
}
