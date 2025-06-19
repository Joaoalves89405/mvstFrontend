import CoffeeModal from "@/components/modal";
import { fetchTypes } from "@/services/fetchTypes";

export default async function Home() {
  const types = await fetchTypes();
  return (
    <div className="min-h-screen">
      <CoffeeModal types={types} />
    </div>
  );
}
