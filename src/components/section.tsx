import { fetchTypes } from "@/services/fetchTypes";
import { Suspense } from "react";
import FilterTabs from "./filter-tabs";
import CoffeeGridWithLoading from "./grid-loading";
import CoffeeGridSkeleton from "./skeleton";

export default async function CoffeeSection({ filter }: { filter?: string }) {
  const types = await fetchTypes();

  return (
    <section
      className="px-6 py-16 lg:px-12 bg-black"
      aria-labelledby="coffee-selection-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="coffee-selection-heading"
          className="text-5xl font-bold text-center mb-12 text-white tracking-wide"
        >
          MVST. EXCLUSIVE COFFEE
        </h2>

        <FilterTabs selectedFilter={filter ?? null} types={types} />

        <Suspense fallback={<CoffeeGridSkeleton />}>
          <CoffeeGridWithLoading filter={filter} />
        </Suspense>
      </div>
    </section>
  );
}
