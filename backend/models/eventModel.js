import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
      title: { type: String, required: true },
      date: { type: Date, required: true }, 
      startTime: { type: String }, 
      endTime: { type: String },
      location: { type: String, required: true },
      description: { type: String, required: true },
    });
    
export const Event = mongoose.model("Event", eventSchema);
    