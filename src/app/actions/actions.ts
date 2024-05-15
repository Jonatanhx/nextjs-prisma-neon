"use server";

import { revalidatePath } from "next/cache";
import { db } from "../../../prisma/db";

export async function savePost(formData: FormData) {
  console.log("savePost", formData.get("title"));
  const title = formData.get("title")?.toString() || "Default Title";
  const content = formData.get("content")?.toString();
  const post = await db.post.create({
    data: {
      title,
      content,
      authorId: 1,
    },
  });
  console.log("Post created:", post);

  await revalidatePath("/");
}
