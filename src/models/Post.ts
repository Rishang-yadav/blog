import mongoose, { Document, Model, Schema } from "mongoose";

// Interface for the Post document
interface IPost extends Document {
    image: string;
    blogNumber: number;
    title: string;
    desc: string;
    category: 'Sports' | 'Money' | 'News' | 'Tech' | 'Programming';
    
}

// Define the Post schema
const PostSchema: Schema<IPost> = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 4
    },
    image:{
        type: String,
        required: true,
    },

    blogNumber:{
        type:Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
        minlength: 6
    },
    category: {
        type: String,
        required: true,
        enum: [
            'Sports',
            'Money',
            'News',
            'Tech',
            'Programming',
        ]
    },
    
}, { timestamps: true });


const Post: Model<IPost> = mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);
export default Post;
