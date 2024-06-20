// "use client"
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// interface PostData {
//   title: string;
//   desc: string;
//   blogNumber: string;
//   category: string;
//   image: string;
// }

// const UpdatePost = () => {
//   const router = useRouter();
//   const [post, setPost] = useState<PostData | null>(null);

//   useEffect(() => {
//     if (router.isReady) {
//       const { title, desc, blogNumber, category, image } = router.query;
//       setPost({
//         title: title as string,
//         desc: desc as string,
//         blogNumber: blogNumber as string,
//         category: category as string,
//         image: image as string,
//       });
//     }
//   }, [router.isReady, router.query]);

//   console.log(post,"Data in single page")

//   if (!post) return <p>Loading...</p>;

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1>Update Post</h1>
//       <div>
//         <h2>{post.title}</h2>
//         <p>{post.desc}</p>
//         <p>Blog Number: {post.blogNumber}</p>
//         <p>Category: {post.category}</p>
//         <img src={post.image} alt={post.title} />
//       </div>
//     </div>
//   );
// };

// export default UpdatePost;

/****latest */
// "use client"
// export default function UpdatePost({
//     searchParams,
//   }: {
//     searchParams: {
//         image:string;
//         title: string;
//         desc: string;
//     //   blogNumber: string;
//     //   category: string;
//     //   image: string;
//     };
//   }) {
//     console.log(searchParams.image);
//     console.log(searchParams.title);
//     console.log(searchParams.desc);
//     return (
//         <div className="max-w-2xl text-white mx-auto p-4">
//           <h1>Update Post</h1>
//           <div>
//             <img src={searchParams.image} alt={searchParams.title} />
//             <p>{searchParams.title}</p>
//             <p>{searchParams.desc}</p>
//           </div>
//         </div>
//     );
    
//   }

