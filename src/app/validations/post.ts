import { z } from "zod";

export const PostCreateSchema = z.object({
  title: z.string().min(3).max(80),
  content: z.string().optional(),
});
export type PostCreate = Zod.infer<typeof PostCreateSchema>;
