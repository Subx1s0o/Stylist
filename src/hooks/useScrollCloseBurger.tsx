import { useEffect, useState } from "react";

export default function useWindowScroll(
  threshold: number,
  callback: () => void
) {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > threshold) {
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, callback]);

  return scrollY;
}
