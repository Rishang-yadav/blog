// "use client"
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Post from "@/views/CreatePost";
// import { Hero } from "@/views/Hero";
// import { fetchGetAPI } from "./apihelper/fetchGetAPI";

// export async function fetchPosts() {
//   // const res = await axios.get("http://localhost:3000/api/post");
//   // console.log(res, "res");
//   // return res.data;

//   try {
//    const res = await fetchGetAPI(getData);
//     console.log(res, "res");
//     return res.data.;

//   } catch (error) {
//     console.error(error);
//   }
// }

// export default function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     async function getPosts() {
//       const fetchedPosts = await fetchPosts();
//       setPosts(fetchedPosts);
//     }
//     getPosts();
//   }, []);

//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 1,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   return (
//     <main className="w-full m-auto">
//       <section className="px-6 py-3">
//         <Carousel responsive={responsive}>
//           {posts.map((item, index) => (
//             <Hero key={index} item={item} />
//           ))}
//         </Carousel>
//       </section>
//       {posts.length > 0 && (
//         <h2 className="text-center text-slate-50 p-6">The Blog Spot</h2>
//       )}
//       <div className="flex flex-wrap justify-center gap-4 mb-4">
//         {posts.length > 0 ? (
//           posts.map((post,index) => (
//             <Post
//               key={index}
//               post={post}
//             />
//           ))
//         ) : (
//           <h3>Post Will Be Loaded Soon</h3>
//         )}
//       </div>
//     </main>
//   );
// }

/*** */
"use client";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Post from "@/views/CreatePost";
import { Hero } from "@/views/Hero";
import { fetchGetAPI } from "./apihelper/fetchGetAPI";

export async function fetchPosts() {
  try {
    const res = await fetchGetAPI();
    console.log(res, "res");
    return res.data;
  } catch (error) {
    console.error(error);
  }
}

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const fetchedPosts: any = await fetchPosts();
      setPosts(fetchedPosts);
    }
    getPosts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <main className="w-full">
      <section className=" py-3 px-2">
        <Carousel responsive={responsive}>
          {posts.map((item, index) => (
            <Hero key={index} item={item} />
          ))}
        </Carousel>
      </section>
    <div className="flex flex-col gap-4 py-6">
    {posts.length > 0 && (
        <div className="flex justify-between px-2">
          <h2 className=" text-2xl font-bold text-white flex justify-center items-center">Blogs</h2>
          <div className="text-white border border-indigo-600 px-2 py-1 cursor-pointer rounded">All Post</div>
        </div>
      )}
      <div className="flex flex-wrap justify-center">
        {posts.length > 0 ? (
          posts.map((post, index) => <Post key={index} post={post} />)
        ) : (
          <h3>Post Will Be Loaded Soon</h3>
        )}
      </div>
    </div>
    </main>
  );
}
