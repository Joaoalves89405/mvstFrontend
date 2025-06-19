"use client";

import { CoffeeType, createCoffeeSchema } from "@/types/Item";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { Button } from "./button";

interface CoffeeModalProps {
  types: CoffeeType[];
}

export default function CoffeeModal({ types }: CoffeeModalProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const rawData = {
        name: formData.get("name"),
        price: formData.get("price"),
        typeId: formData.get("typeId"),
        imageUrl: formData.get("imageUrl"),
        description: formData.get("description"),
      };

      const validated = createCoffeeSchema.safeParse(rawData);

      if (!validated.success) {
        const firstError = validated.error.errors[0];
        toast.error(`Validation failed: ${firstError?.message}`);
        return;
      }

      const payload = {
        ...validated.data,
        price: Number(validated.data.price),
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/coffees`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const errorBody = await res.json();
        toast.error(errorBody.message || "Failed to create coffee.");
        return;
      }

      toast.success("Coffee created!");
      router.push("/");
    } catch (err) {
      console.error("API error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center p-4">
      <div className="bg-background rounded-lg w-full max-w-[600px] relative">
        <Button
          onClick={() => router.push("/")}
          className="absolute right-4 top-4 bg-transparent hover:bg-transparent"
        >
          X
        </Button>

        <div className="px-4 py-4 sm:px-24 sm:py-8">
          <h2 className="text-center text-white text-4xl font-bold mb-6 mt-4">
            CREATE NEW
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <>
              <label htmlFor="name" className="block text-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name your coffee here"
                required
                className="w-full bg-inputBackground border border-grayPlaceholder rounded-md px-3 py-2 !mt-2 text-white placeholder-grayPlaceholder focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </>

            <>
              <label htmlFor="price" className="block text-label">
                Price
              </label>
              <div className="relative !mt-2">
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="0.00"
                  pattern="^\d+(\.\d{1,2})?$"
                  required
                  className="w-full bg-inputBackground border border-grayPlaceholder rounded-md px-3 py-2 text-white placeholder-grayPlaceholder focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-white">
                  €
                </div>
              </div>
            </>

            <>
              <fieldset>
                <legend className="block text-label mb-1">Type</legend>
                <div className="grid grid-cols-2 gap-3">
                  {types.map((type) => (
                    <label key={type.id} className="cursor-pointer">
                      <input
                        type="radio"
                        name="typeId"
                        value={type.id}
                        required
                        className="sr-only peer"
                      />
                      <div className="px-4 py-2 rounded-md border border-grayPlaceholder text-label peer-checked:border-primary peer-checked:text-primary hover:border-tertiary hover:text-tertiary transition-colors text-center">
                        {type.name}
                      </div>
                    </label>
                  ))}
                </div>
              </fieldset>
            </>

            <>
              <label htmlFor="imageUrl" className="block text-label mb-1">
                Upload image
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                placeholder="Paste image URL here"
                className="w-full bg-inputBackground border border-grayPlaceholder !mt-2 rounded-md px-3 py-2 text-white placeholder-grayPlaceholder focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </>

            <>
              <label htmlFor="description" className="block text-label mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Add a description"
                rows={3}
                maxLength={500}
                className="w-full bg-inputBackground border border-grayPlaceholder !mt-2 rounded-md px-3 py-2 text-white placeholder-grayPlaceholder focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </>

            <div className="flex justify-center gap-3 mt-10">
              <Button
                variant="discard"
                size="md"
                type="button"
                onClick={() => router.push("/")}
              >
                Discard
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Confirm"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
