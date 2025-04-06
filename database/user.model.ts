import { model, models, Schema, Types } from "mongoose";

export interface IUser {
  name: string;
  username: string;
  email: string;
  image?: string;
  testSessionId?: Types.ObjectId;
}
export interface IUserDoc extends IUser, Document {}
const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    testSessionId: { type: Schema.Types.ObjectId, ref: "TestSession" },
  },
  { timestamps: true }
);

const User = models?.User || model<IUser>("User", UserSchema);

export default User;
