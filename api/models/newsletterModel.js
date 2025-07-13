import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true }, 
  imgURL: { type:String, required: true }, 
  pdfURL: { type: String,  required: true  },
});

export const Newsletter = mongoose.model("Newsletter", newsletterSchema);
