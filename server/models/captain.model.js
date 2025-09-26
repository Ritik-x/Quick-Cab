import mongoose from "mongoose";

const captainSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  password: { type: String, required: true },
  socketId: { type: String, default: null },
  status: {
    type: String,
    enum: ["available", "unavailable"],
    default: "unavailable",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "At least 3 char ka color le"],
    },
    palte: {
      type: String,
      required: true,
      minlength: [4, "At Least 4 char long  "],
    },
    capacity: {
      type: Number,
      required: true,
      minlength: [3, "At least 3 ki capacity"],
    },
    type: {
      type: String,
      required: true,
      enum: ["bike", "car", "van"],
    },
  },
  location: {
    lat: {
      type: Number,
    },
    lon: {
      type: Number,
    },
  },
});

const captainModel = mongoose.model("Captain", captainSchema);
export default captainModel;
