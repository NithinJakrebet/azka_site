import mongoose from "mongoose";

const committeeMemberSchema = new mongoose.Schema({
      name: { type: String, required: true },
      imageUrl: { type: String, required: true }, // URL to the image
    });
    
export const CommitteeMember = mongoose.model("CommitteeMember", committeeMemberSchema);
    