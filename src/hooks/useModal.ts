import { useState } from "react";

export default function useModal() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "success" | "error";
  } | null>(null);

  const handleCloseModal = () => {
    if (modalState) {
      setModalState({ ...modalState, isOpen: false });
    }
  };

  return {
    modalState,
    handleCloseModal,
    setModalState,
  };
}
