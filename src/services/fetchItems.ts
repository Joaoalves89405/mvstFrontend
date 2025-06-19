import { Coffee } from "@/types/Item";

export const fetchItems = async (filter?: string | null): Promise<Coffee[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = filter
    ? `${baseUrl}/coffees?typeId=${filter}`
    : `${baseUrl}/coffees`;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch coffees");

  const data = await response.json();
  return data as Coffee[];
};
