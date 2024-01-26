import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: [true, 'Username already exists, please choose another one']
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, 'Email already exists, please use another one']
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
