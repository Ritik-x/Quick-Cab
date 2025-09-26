import captainModel from "../models/captain.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerCaptain = async (req, res) => {
  const { fullname, email, password, vehicle } = req.body;
  if (!fullname || !email || !password || !vehicle) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const alreadyEmail = await captainModel.findOne({ email });
    if (alreadyEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const captain = await captainModel.create({
      fullname,
      email,
      password: hashedpassword,
      vehicle,
    });

    const token = jwt.sign(
      { captainId: captain._id, email: captain.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(201).json({
      token,
      captainId: captain._id,
      message: "Captain registered",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const loginCaptain = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const captain = await captainModel.findOne({ email });
    if (!captain) {
      return res.status(400).json({ message: "Invalid captain" });
    }
    if (!captain.password) {
      return res
        .status(400)
        .json({ message: "Password not set for this captain" });
    }
    const isPasswordValid = await bcrypt.compare(password, captain.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { captainId: captain._id, email: captain.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // dev me false chalega
      sameSite: "strict",
      maxAge: 60 * 60 * 1000, // 1 hr
    });

    return res.status(200).json({
      captainId: captain._id,
      message: "Captain logged in successfully",
    });
  } catch (error) {}
  return res.status(500).json({ message: error.message });
};

export const getCaptain = async (req, res) => {
  const captainId = req.params._id;

  try {
    const captain = await captainModel.findById(captainId).select("-password");
    if (!captain) {
      return res.status(404).json({ message: "Captain not found" });
    }
    return res.status(200).json({ captain });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const logoutController = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,

    sameSite: "strict",
  });
  return res.status(200).json({ message: "Captain logged out successfully" });
};
