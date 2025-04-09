import { Schema, Types, model, models } from "mongoose";

interface ITestAnswer {
  user: Types.ObjectId;
  questionId: number;
  answer: string | null;
  factor: string; // 'big5', 'myers', 'love', 'relationship'
  mapping: number;
  skipped: boolean;
  flagged: boolean;
  edited: boolean;
  testSession: Types.ObjectId;
}
const TestAnswerSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    questionId: { type: Number, required: true },
    answer: { type: String, enum: ["a", "b", "c", "d", "e", null], default: null },
    factor: { type: String, required: true }, // 'big5', 'myers', 'love', 'relationship'
    mapping: { type: Number, required: true },
    skipped: { type: Boolean, default: false },
    flagged: { type: Boolean, default: false },
    edited: { type: Boolean, default: false },
    testSession: { type: Schema.Types.ObjectId, ref: "TestSession" },
  },
  { timestamps: true }
);

const TestAnswer = models?.TestSession || model<ITestAnswer>("TestSession", TestAnswerSchema);

export default TestAnswer;
