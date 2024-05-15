import { db } from "../../prisma/db";
import PostForm from "./components/PostForm";

export default async function Home() {
  const posts = await db.post.findMany({ include: { author: true } });

  return (
    <main className="flex flex-col items-center gap-8 p-24 mx-auto bg-gray-300">
      <PostForm />
      <div className="w-96">
        {posts.map((post) => (
          <div className="flex flex-col gap-2" key={post.id}>
            <h2 className="text-2xl">{post.title}</h2>
            <p>{post.content}</p>
            <span className="italic text-gray-400">{post.author.name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
