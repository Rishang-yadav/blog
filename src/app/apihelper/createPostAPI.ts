import axios from 'axios';
import { useRouter } from 'next/router';

interface PostData {
  title: string;
  desc: string;
  category: string;
  image:string;
  blogNumber: string;
}

export const createPostAPI = async (postData: PostData): Promise<void> => {
  try {
    console.log("post api call in create post");
    const res = await axios.post("http://localhost:3000/api/post", postData);

    if (res.status !== 200) {
      throw new Error("Error occurred");
    }

    useRouter().push("/");
  } catch (error) {
    console.error(error);
    // Handle error as needed
  }
};


