import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";
import Post from "@/models/Post";

export async function GET(req: NextRequest, res: NextResponse) {
  console.log("Api call  get one card");

  try {
    // const id = req.nextUrl;
    const url = req.nextUrl.pathname;
    console.log(url, "id");

    // // Use a regular expression to extract the ID after "post"
    const match = url.match(/\/post\/([^\/]+)/);

    // // Extract the ID from the matched result
    const id = match ? match[1] : null;
    await db.connect();
    console.log("Database connected");

    const response = await Post.findOne({ _id: id });
    console.log("Data get route:", response);

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  console.log("API call for delete");

  try {
    const url = req.nextUrl.pathname;
    console.log(url, "id");

    // // Use a regular expression to extract the ID after "post"
    const match = url.match(/\/post\/([^\/]+)/);

    // // Extract the ID from the matched result
    const id = match ? match[1] : null;

    
    await db.connect();
    console.log("Database connected");

    const post = await Post.findById(id);
    console.log(post, "post");

    const deletedPost = await Post.findByIdAndDelete(id);
    console.log(deletedPost, "deletedPost");

    return new Response(JSON.stringify({ msg: "Successfully deleted post" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}
