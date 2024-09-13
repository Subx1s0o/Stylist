"use client";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { Service, ServiceslistProps } from "@/types/services.interface";
import { loadMoreServices } from "@/utils/loadMoreServices";
import { fetchServices } from "@/utils/services";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

export default function ServicesList({
  services,
  locale,
  category,
}: ServiceslistProps) {
  const [currentServices, setCurrentServices] = useState<{
    services: Service[];
    totalPages: number;
  }>(services);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(services.totalPages);

  useEffect(() => {
    setCurrentServices(services);
    setTotalPages(services.totalPages);
  }, [services.totalPages, services]);

  const loadMore = async () => {
    const newPage = await loadMoreServices(
      currentPage,
      setCurrentServices,
      fetchServices,
      category.toLowerCase()
    );
    setCurrentPage(newPage);
  };

  const observerRef = useInfiniteScroll({
    loadMore,
    currentPage,
    totalPages,
  });

  return (
    <ul className="flex flex-col gap-7">
      {currentServices.services.map((service, number) => (
        <ServiceCard
          key={service._id}
          service={service}
          number={number}
          category={category}
          locale={locale}
        />
      ))}

      <li ref={observerRef} className="h-10"></li>
    </ul>
  );
}
