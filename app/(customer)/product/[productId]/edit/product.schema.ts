import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string(),
  slug: z
    .string()
    .regex(/^[a-zA-Z0-9]*$/)
    .min(10)
    .max(20),
  note: z.string().optional().nullable(),
  information: z.string().optional().nullable(),
  review: z.string().optional().nullable(),
  thanks: z.string().optional().nullable(),
  backgroundColor: z.string().optional().nullable(),
});

export const GRADIENTS_CLASSES = [
  "bg-gradient-to-r from-violet-600 to-indigo-600",
  "bg-gradient-to-r from-rose-400 to-red-500",
  "bg-gradient-to-r from-amber-200 to-yellow-400",
  "bg-gradient-to-r from-blue-200 to-cyan-200",
];

export type ProductType = z.infer<typeof ProductSchema>;
