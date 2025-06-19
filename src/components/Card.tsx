import { Coffee } from "@/types/Item";
import Image from "next/image";
import { Button } from "./button";

export default function CoffeeCard({ item }: { item: Coffee }) {
  return (
    <article className="bg-background rounded-md p-6 text-center">
      <div className="flex justify-start">
        <Button
          size="sm"
          className={`${
            item.type.name === "Arabic" ? "!bg-arabic" : "bg-robusta"
          }`}
        >
          {item.type.name}
        </Button>
      </div>
      <div className="mb-6 h-32 bg-background rounded-lg flex items-center justify-center">
        {item.imageUrl ? (
          <Image
            src={item.imageUrl}
            alt={`${item.name} coffee`}
            width={120}
            height={120}
            className="object-cover rounded-lg"
          />
        ) : (
          <span className="text-gray-500">Image placeholder</span>
        )}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-tertiary">{item.name}</h3>
      <p className="text-secondary text-base mb-4">{item.description}</p>
      <p
        className="text-lg font-bold text-white"
        aria-label={`Price: ${item.price} euros`}
      >
        {item.price} €
      </p>
    </article>
  );
}
