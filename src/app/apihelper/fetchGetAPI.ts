import { ICollection } from '@/types';
import axios from 'axios';

export const fetchGetAPI = async (): Promise<{ data: ICollection | null; error: string | null }> => {
  try {
    console.log(" api call in get");
    const res = await axios.get(`http://localhost:3000/api/post`);

    if (res.status === 200) {
        return { data: res.data, error: null };
    
    } else {
        return { data: null, error: `Request failed with status code: ${res.status}` };
    }
  } catch (error: any) {
    // Assuming error is of type any. You might want to add more specific type handling
    return { data: null, error: error?.message || "An unknown error occurred" };
  }
};
