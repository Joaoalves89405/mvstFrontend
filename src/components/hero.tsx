import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

export default function HeroSection() {
  return (
    <div className="relative min-h-[932px] bg-hero-coffee bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/[65%]" aria-hidden="true"></div>

      <header className="relative z-10 flex items-center justify-between px-6 lg:px-[285px] py-[27px]">
        <Image
          src="/MVST_Coffee.svg"
          alt="MVST Coffee Logo"
          width={166}
          height={24}
          priority
        />
        <Link href="/add-new">
          <Button aria-label="Create custom coffee">Create</Button>
        </Link>
      </header>

      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6 lg:px-10">
        <div className="flex flex-col space-y-6 text-center sm:text-start items-center sm:items-start">
          <h1 className="text-6xl sm:text-8xl font-bold text-white tracking-wide leading-tight sm:flex sm:flex-row flex-col sm:gap-4">
            <span className="block sm:inline">ROASTED</span>
            <span className="block sm:inline">COFFEE</span>
          </h1>
          <div>
            <p className="text-lg text-secondary mb-8">
              Choose a coffee from below or create your own.
            </p>
            <Link href="/add-new">
              <Button aria-label="Create your own custom coffee blend">
                Create your own coffee
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
