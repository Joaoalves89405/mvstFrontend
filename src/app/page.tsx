import HeroSection from "@/components/hero";
import CoffeeSection from "@/components/section";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter } = await searchParams;

  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <CoffeeSection filter={filter} />
      <footer>
        <Image
          src="/footer.png"
          alt="Footer decoration"
          width={2167}
          height={504}
          className="w-full h-auto"
        />
      </footer>
    </div>
  );
}
