import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First name must be at least 3 characters long"],
    },
    lastName: {
      type: String,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "Please use a valid email address."],
  },
  socketId: {
    type: String,
    default: null,
  },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
