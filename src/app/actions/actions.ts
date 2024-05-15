"use server";

import { revalidatePath } from "next/cache";
import { db } from "../../../prisma/db";
import { PostCreate } from "../validations/post";

export async function savePost(postData: PostCreate) {
  const post = await db.post.create({
    data: {
      title: postData.title,
      content: postData.content,
      authorId: 1,
    },
  });
  console.log("Post created:", post);

  revalidatePath("/");
}
