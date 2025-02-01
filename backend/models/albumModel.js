import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true }, 
  images: { type: [String], required: true }, 
  link: { type: String },
});

export const Album = mongoose.model("Album", albumSchema);
