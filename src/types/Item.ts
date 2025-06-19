import z from "zod";

export const createCoffeeSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  price: z
    .string()
    .min(1, "Price is required")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) > 0,
      "Price must be a positive number"
    ),
  typeId: z.string().uuid("Type ID must be a valid UUID"),
  imageUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(),
});

export const coffeeTypeSchema = z.object({
  id: z
    .string({
      required_error: "Type ID is required",
      invalid_type_error: "Type ID must be a string",
    })
    .uuid("Type ID must be a valid UUID"),

  name: z
    .string({
      required_error: "Type name is required",
      invalid_type_error: "Type name must be a string",
    })
    .min(1, "Type name cannot be empty")
    .max(50, "Type name must be less than 50 characters"),
});

export const coffeeSchema = z.object({
  id: z.string().uuid(),
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),

  price: z
    .string()
    .min(1, "Price is required")
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) > 0,
      "Price must be a positive number"
    ),
  type: coffeeTypeSchema,
  imageUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(),
});

export type Coffee = z.infer<typeof coffeeSchema>;
export type CoffeeType = z.infer<typeof coffeeTypeSchema>;
