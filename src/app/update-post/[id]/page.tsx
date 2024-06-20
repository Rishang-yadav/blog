"use client";
import { singleGetAPI } from "@/app/apihelper/singleGetAPI";
import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { singleDeleteAPI } from "@/app/apihelper/singleDeleteAPI";

interface ICollection {
  title: string;
  desc: string;
  blogNumber: number;
  category: string;
  image: string;
}

const Page = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<ICollection | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await singleGetAPI(params.id);
      console.log(res, "Fetching data");
      setData(res.data);
    };

    fetchData();
  }, [params.id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleDelete = async () => {
    try {
      const res: any = await singleDeleteAPI(params.id);
      router.push("/");
      // if (res.ok) {
      //   router.push("/");
      // }
    } catch (error) {
      console.log(error);
    }
  };

  const { title, desc, blogNumber, category, image } = data;

  return (
    <div className="w-full px-6">
      <div className="w-full flex flex-col gap-4 bg-bgDark p-2 mx-auto bg-opacity-80 rounded-md overflow-hidden border ">
        <div className="rounded">
          <img
            src={image}
            alt="logo"
            className="w-full h-[500px] object-cover rounded"
          ></img>
        </div>

        <div className=" flex flex-col gap-2">
          <div className="flex justify-between text-white">
            <p className="text-white font-bold text-2xl leading-6">{title}</p>
            <p className="border border-indigo-600 px-2 py-1 rounded text-white text-xs font-medium tracking-widest">
              {category} <span> {blogNumber}</span>
            </p>
          </div>

          <p className="leading-relaxed mb-2 text-white text-base font-normal">
            {desc}
          </p>

         <div className="flex w-full justify-end"> <button
            onClick={handleDelete}
            className="flex justify-center items px-3 py-2 rounded-md text-primary font-semibold bg-blue-500 hover:text-white transition-all duration-300"
          >
            <AiFillDelete style={{ fontSize: "24px" }} />
          </button></div>
        </div>
      </div>
    </div>
  );
};

export default Page;
