import { CoffeeType } from "@/types/Item";

export const fetchTypes = async (): Promise<CoffeeType[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const response = await fetch(`${baseUrl}/coffees/types`);
  if (!response.ok) throw new Error("Failed to fetch coffee types");

  const data = await response.json();
  return data as CoffeeType[];
};
