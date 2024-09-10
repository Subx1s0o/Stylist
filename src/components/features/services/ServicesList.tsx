"use client";
import { Service, ServiceslistProps } from "@/types/services.interface";
import { loadMoreServices } from "@/utils/loadMoreServices";
import { fetchServices } from "@/utils/services";
import { useEffect, useRef, useState } from "react";
import ServiceCard from "../service/ServiceCard";

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
  const observerRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    setTotalPages(services.totalPages);
  }, [services.totalPages]);

  useEffect(() => {
    const observerElement = observerRef.current;

    if (!observerElement) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && currentPage < totalPages) {
          const newPage = await loadMoreServices(
            currentPage,
            setCurrentServices,
            fetchServices,
            category.toLowerCase()
          );

          setCurrentPage(newPage);
        }
      },
      {
        rootMargin: "0px 0px 250px 0px",
        threshold: 0.1,
      }
    );

    observer.observe(observerElement);

    return () => {
      if (observerElement) observer.unobserve(observerElement);
    };
  }, [currentPage, totalPages, category]);

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
