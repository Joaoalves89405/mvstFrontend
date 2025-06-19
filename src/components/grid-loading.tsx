"use client";
import { fetchItems } from "@/services/fetchItems";
import { Coffee } from "@/types/Item";
import { useEffect, useState, useTransition } from "react";
import CoffeeCard from "./card";
import CoffeeGridSkeleton from "./skeleton";

export default function CoffeeGridWithLoading({ filter }: { filter?: string }) {
  const [items, setItems] = useState<Coffee[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      setIsLoading(true);
      try {
        const fetchedItems = await fetchItems(filter);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Failed to fetch items:", error);
        setItems(null);
      } finally {
        setIsLoading(false);
      }
    });
  }, [filter]);

  if (isLoading || isPending) {
    return <CoffeeGridSkeleton />;
  }

  if (!items) {
    return <p className="text-white text-center">No coffee items found.</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {items.map((item) => (
        <CoffeeCard key={item.id} item={item} />
      ))}
    </div>
  );
}
