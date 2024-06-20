// /****jayant */
// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const Post = ({ post: { title, desc, blogNumber, category, image }:{ post: ICollectio } ) => {
//   return (
//     <div className="w-[300px] bg-bgDark object-contain bg-opacity-80 rounded-md overflow-hidden border ">
//       <div className="">
//         <img src={image} alt="logo" className="w-full object-cover"></img>
//       </div>

//       <div className="p-4 flex flex-col gap-2">
//         <p className="text-white font-bold text-lg leading-6">
//           {" "}
//           {blogNumber} {title}
//         </p>
//         <span className="flex  py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
//           {category}
//         </span>
//         {desc.length > 100 ? (
//           <p className="leading-relaxed mb-2 text-white text-base font-normal">{desc.substr(0,100)}...</p>
//         ) : (
//           desc
//         )}
//       </div>
//     </div>
//   );
// };

// export default Post;

import { ICollection } from "@/types";
import Link from "next/link";

const Post = ({ post }: { post: ICollection }) => {
  const { title, desc, blogNumber, category, image, _id } = post;

  return (
    <Link href={`/update-post/${_id}`} className="flex w-1/4 p-2 ">
      <div className="w-full bg-bgDark object-contain bg-opacity-80 rounded-md overflow-hidden border border-indigo-600 ">
        <div className="w-full">
          <img
            src={image}
            alt="logo"
            className="lg:w-full h-[300px] object-cover"
          ></img>
        </div>

        <div className="p-4 flex flex-col gap-2">
          <div className="flex justify-between rounded text-white text-xs font-medium tracking-widest">
           <p className="px-2 py-1 border border-indigo-600 rounded"> {category}</p> <p>{blogNumber}</p>
          </div>
          <p className="text-white font-bold text-lg leading-6">
            {title}
          </p>

          {desc.length > 100 ? (
            <p className="leading-relaxed mb-2 text-white text-base font-normal">
              {desc.substr(0, 100)}...
            </p>
          ) : (
            desc
          )}
        </div>
      </div>
    </Link>
  );
};

export default Post;
