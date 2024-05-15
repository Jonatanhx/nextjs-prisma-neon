import { db } from "../../prisma/db";
import { savePost } from "./actions/actions";

export default async function Home() {
  const posts = await db.post.findMany({ include: { author: true } });

  return (
    <main className="flex flex-col items-center gap-8 p-24 mx-auto bg-gray-300">
      <div className="w-96">
        {posts.map((post) => (
          <div className="flex flex-col gap-2" key={post.id}>
            <h2 className="text-2xl">{post.title}</h2>
            <p>{post.content}</p>
            <span className="italic text-gray-400">{post.author.name}</span>
          </div>
        ))}
      </div>
      <form className="w-96 flex flex-col gap-2" action={savePost}>
        <input type="text" name="title" placeholder="title" />
        <textarea rows={4} name="content" placeholder="content" />
        <button className="hover:ring-2">Save Post</button>
      </form>
    </main>
  );
}
