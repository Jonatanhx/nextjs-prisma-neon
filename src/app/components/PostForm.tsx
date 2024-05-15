"use client";
import { useForm } from "react-hook-form";
import { savePost } from "../actions/actions";
import { PostCreate } from "../validations/post";

export default function PostForm() {
  const form = useForm<PostCreate>();

  const handleSubmit = async (data: PostCreate) => {
    await savePost(data);
    form.reset();
  };

  return (
    <form
      className="w-96 flex flex-col gap-2"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      <input
        {...form.register("title")}
        type="text"
        name="title"
        placeholder="title"
      />
      <textarea
        {...form.register("content")}
        rows={4}
        name="content"
        placeholder="content"
      />
      <button className="hover:ring-2">Save Post</button>
    </form>
  );
}
