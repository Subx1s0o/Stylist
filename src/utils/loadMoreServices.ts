import { Service } from "@/types/services.interface";

interface ServicesState {
  data: Service[];
  totalPages: number;
}

export const loadMoreServices = async (
  currentPage: number,
  setCurrentServices: React.Dispatch<React.SetStateAction<ServicesState>>,
  fetchServices: (
    currentPage: number,
    category: string,
    format?: string,
  ) => Promise<{ data: Service[]; totalPages: number }>,
  category: string,
  format?: string,
) => {
  try {
    const { data: newServices, totalPages } = await fetchServices(
      currentPage + 1,
      category,
      format,
    );

    setCurrentServices((prev) => ({
      data: [...prev.data, ...newServices],
      totalPages,
    }));

    return currentPage + 1;
  } catch (error) {
    console.error("Failed to fetch more services:", error);
    return currentPage;
  }
};
