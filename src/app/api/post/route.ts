import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import Post from "@/models/Post";

export async function GET(req: NextRequest, res: NextResponse) {
  console.log("Api call get");

  try {
    await db.connect();
    console.log("Database connected");

    const response = await Post.find({});
    console.log("Data get route:", response);

   // return NextResponse.json({ message: "Data add successfully", response });

    // const posts = await Post.find({}).limit(16).populate("authorId");
    return new Response(JSON.stringify(response), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  console.log("Api call post");

  try {
    const body = await req.json();
    console.log(body, "hero");

    
    await db.connect();
    console.log("Database connected");

    const newPost = await Post.create(body);
    console.log("Post created successfully", newPost);

    return new Response(JSON.stringify(newPost), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
