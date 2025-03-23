// /api/clerk/webhook

import { db } from "@/server/db";

export const POST = async (req: Request) => {
  try {
    
    const body = await req.json();
    console.log("Raw body:", JSON.stringify(body, null, 2));
    
    const { data } = body;
    if (!data) {
      throw new Error("No data received in webhook");
    }

    // Extract user data from the webhook
    const emailAddress = data.email_addresses?.[0]?.email_address;
    const firstName = data.first_name;
    const lastName = data.last_name;
    const imageUrl = data.image_url;
    const id = data.id;

    if (!emailAddress) {
      throw new Error("No email address found in webhook data");
    }

    // Create user in database
    await db.user.create({
      data: {
        emailAddress,
        firstName,
        lastName,
        imageUrl,
        id
      }
    });

    return new Response("Webhook received", { status: 200 });
  } catch (error) {
    return new Response("Error processing webhook", { status: 500 });
  }
};
 