import { Schema, Types, model, models } from "mongoose";

interface IPrivateField {
  user: Types.ObjectId;
  questionId: number;
  answer: string | null;
  visibleToPartner: boolean;
}
const PrivateFieldSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    questionId: { type: Number, required: true },
    answer: { type: String, enum: ["a", "b", "c", "d", "e", null], default: null },
    visibleToPartner: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const PrivateField =
  models?.PrivateField || model<IPrivateField>("PrivateField", PrivateFieldSchema);

export default PrivateField;
