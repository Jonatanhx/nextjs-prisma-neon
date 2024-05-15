import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function main() {
  const test = await db.user.upsert({
    where: { email: "test@testsson.se" },
    update: {},
    create: {
      email: "test@testsson.se",
      name: "Jonatan",
      posts: {
        create: [
          {
            title: "test",
            content: "many test",
            published: true,
          },
          {
            title: "test2",
            content: "fewer test",
            published: true,
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
