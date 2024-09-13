import { useEffect, useRef } from "react";

type UseInfiniteScrollProps = {
  loadMore: () => Promise<void>;
  currentPage: number;
  totalPages: number;
  rootMargin?: string;
  threshold?: number;
};

export function useInfiniteScroll({
  loadMore,
  currentPage,
  totalPages,
  rootMargin = "0px 0px 250px 0px",
  threshold = 0.1,
}: UseInfiniteScrollProps) {
  const observerRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const observerElement = observerRef.current;

    if (!observerElement) return;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && currentPage < totalPages) {
          await loadMore();
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(observerElement);

    return () => {
      if (observerElement) observer.unobserve(observerElement);
    };
  }, [currentPage, totalPages, loadMore, rootMargin, threshold]);

  return observerRef;
}
