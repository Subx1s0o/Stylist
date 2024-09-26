import { notFound } from "next/navigation";

import { EndPoints } from "../constans/endpoints";

export async function fetchServices(
  page: number = 1,
  category: string,
  format?: string,
) {
  const url = new URL(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/${EndPoints.SERVICES}/${category}`,
  );
  url.searchParams.append("limit", "5");
  url.searchParams.append("page", page.toString());
  if (format) {
    url.searchParams.append("format", format);
  }

  try {
    const res = await fetch(url.toString(), { next: { revalidate: 1200 } });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return { services: [] };
  }
}

export async function fetchService(id: string) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${EndPoints.SERVICES}/${id}`;

  try {
    const res = await fetch(url, { next: { revalidate: 1200 } });
    if (!res.ok) {
      notFound();
    }
    return res.json();
  } catch (error) {
    notFound();
    return { services: null };
  }
}
