import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
  tags: [String],
  dueDate: Date,
  startTime: Date,
  endTime: Date,
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  recurrence: String,
  subtasks: [{ title: String, completed: Boolean }],
  dependency: { type: mongoose.Schema.Types.ObjectId, ref: "Task" }
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);