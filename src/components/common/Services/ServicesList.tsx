"use client";

import { useEffect, useState } from "react";

import { Service, ServiceslistProps } from "@/types/services.interface";

import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { loadMoreServices } from "@/utils/loadMoreServices";
import { fetchServices } from "@/utils/services";

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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setCurrentServices(services);
    setTotalPages(services.totalPages);
    setCurrentPage(1);
  }, [services]);

  const loadMore = async () => {
    setLoading(true);
    try {
      const newPage = await loadMoreServices(
        currentPage,
        setCurrentServices,
        fetchServices,
        category.toLowerCase(),
      );
      setCurrentPage(newPage);
    } catch (error) {
      setLoading(false);
      console.error("Failed to load more services:", error);
    } finally {
      setLoading(false);
    }
  };

  const observerRef = useInfiniteScroll({
    loadMore,
    currentPage,
    totalPages,
  });

  return (
    <div>
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

      {loading && <div className="text-center py-4">Loading...</div>}
    </div>
  );
}
