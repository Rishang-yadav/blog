export interface ICollection {
    image: string;
    blogNumber: number;
    title: string;
    desc: string;
    category: 'Sports' | 'Money' | 'News' | 'Tech' | 'Programming';
    _id:string;
}