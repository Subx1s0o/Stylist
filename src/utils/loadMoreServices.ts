import { Service } from "@/types/services.interface";

interface ServicesState {
  services: Service[];
  totalPages: number;
}

export const loadMoreServices = async (
  currentPage: number,
  setCurrentServices: React.Dispatch<React.SetStateAction<ServicesState>>,
  fetchServices: (
    currentPage: number,
    category: string
  ) => Promise<{ services: Service[]; totalPages: number }>,
  category: string
) => {
  try {
    const { services: newServices, totalPages } = await fetchServices(
      currentPage + 1,
      category
    );

    setCurrentServices((prev) => ({
      services: [...prev.services, ...newServices],
      totalPages,
    }));

    return currentPage + 1;
  } catch (error) {
    console.error("Failed to fetch more services:", error);
    return currentPage;
  }
};
