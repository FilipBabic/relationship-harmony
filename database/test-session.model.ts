import { model, models, Schema, Types } from "mongoose";

export interface ITestSession {
  users: [Types.ObjectId];
  status: string;
  shareResult: boolean;
  startedAt: Date;
  completedAt: Date;
}

const TestSessionSchema = new Schema(
  {
    users: [{ type: Schema.Types.ObjectId, required: true }],
    status: { type: String, enum: ["in_progress", "completed"], default: "in_progress" },
    sharedResults: { type: Boolean, default: true },
    startedAt: { type: Date, default: Date.now },
    completedAt: { type: Date },
  },
  { timestamps: true }
);

const TestSession = models?.TestSession || model<ITestSession>("TestSession", TestSessionSchema);

export default TestSession;
