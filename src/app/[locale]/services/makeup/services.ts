export async function fetchServices(page: number = 1, category: string) {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/services/${category}?limit=5&page=${page}`;

  try {
    const res = await fetch(url, { cache: "no-store" }); // { next: { revalidate: 600 }
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return { services: [] };
  }
}
