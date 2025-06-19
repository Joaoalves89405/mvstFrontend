"use client";
import { CoffeeType } from "@/types/Item";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./button";

interface FilterTabsProps {
  selectedFilter: string | null;
  types: CoffeeType[];
}

export default function FilterTabs({ selectedFilter, types }: FilterTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filters = [{ id: null, name: "All" }, ...types];

  const handleFilterChange = (filterId: string | null) => {
    const params = new URLSearchParams(searchParams);

    if (filterId) {
      params.set("filter", filterId);
    } else {
      params.delete("filter");
    }

    const newUrl = params.toString() ? `/?${params.toString()}` : "/";
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex justify-center mb-16">
      <div
        className="bg-backgroundSecondary rounded-full flex"
        role="tablist"
        aria-label="Coffee type filters"
      >
        {filters.map((filter) => {
          const isSelected =
            (filter.id === null && !selectedFilter) ||
            selectedFilter === filter.id;

          return (
            <Button
              key={filter.id ?? "all"}
              onClick={() => handleFilterChange(filter.id)}
              role="tab"
              aria-selected={isSelected}
              className={`px-4 py-2 sm:!px-16 sm:!py-3 transition-colors duration-200 ${
                isSelected
                  ? "bg-white !text-black hover:!bg-tertiary"
                  : "hover:!bg-secondary !bg-backgroundSecondary"
              }`}
              aria-label={`Filter by ${filter.name}`}
            >
              {filter.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
