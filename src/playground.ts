import { db } from "@/server/db";

await db.user.create({
  data: {
    emailAddress: "test@test.com",
    firstName: "Test",
    lastName: "User",
    imageUrl: "https://example.com/avatar.jpg"
  },
});