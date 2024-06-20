/***update* */
"use client"
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { createPostAPI } from "../apihelper/createPostAPI";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Sports");
  const [image, setImage] = useState<string>("");
  const [blogNumber, setBlogNumber] = useState("");
   const router = useRouter();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {

        const fileData = reader.result as string;
        console.log(fileData, "fileData5");
          setImage(fileData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    try {
     
      await createPostAPI({ title, desc, category, image, blogNumber });
      router.push("/"); // Redirect to home page after successful post
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-gray-100 max-w-screen-sm m-auto p-8">
      <div className="text-center mb-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Create A Post
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
        <div className=" flex flex-col gap-2">
          <input
            type="file"
            name="file"
            onChange={onChangeHandler}
            className="w-full focus:outline-none p-2 mt-4"
            placeholder="Upload Image"
          />
        </div>
        <div>
          <input
            type="text"
            value={blogNumber}
            onChange={(e) => setBlogNumber(e.target.value)}
            className="w-full focus:outline-none p-2 mt-4"
            placeholder="Blog Number"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full focus:outline-none p-2"
            placeholder="Title Your Work"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="Share Your Thoughts..."
          />
        </div>
        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full focus:outline-none p-2 mt-4"
          >
            <option value="Sports">Sports</option>
            <option value="Money">Money</option>
            <option value="News">News</option>
            <option value="Tech">Tech</option>
            <option value="Programming">Programming</option>
          </select>
        </div>

        </div>
        <button
          type="submit"
          className="px-6 py-2.5 rounded-md bg-primary mt-3 text-white bg-blue-500 hover:text-white transition-all duration-300"
        >
          Post
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
