import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    avatar: { type: String, default: "" },
    name: { type: String, reqiured: true },
    email: { type: String, reqiured: true },
    password: { type: String, reqiured: true },
    verified: { type: Boolean, reqiured: false },
    verficationCode: { type: String, reqiured: false },
    admin: { type: Boolean, reqiured: false },
  },
  { timestamps: true }
);

const User = model("User", UserSchema)
export default User;