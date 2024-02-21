import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    requires: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: String,
    default: new Date().toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }),
  },
});

export const Task = mongoose.model("Task", schema);
