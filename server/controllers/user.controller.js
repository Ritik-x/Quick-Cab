import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !email || !password) {
    return res
      .status(400)
      .json({ message: " name, email, and password are required." });
  }
  try {
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      fullname: { firstName, lastName },
      email,
      password: hashedpassword,
    });
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(201).json({
      token,
      userId: newUser._id,
      message: "User registered successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
