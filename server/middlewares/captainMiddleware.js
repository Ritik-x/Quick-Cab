import captainModel from "../models/captain.model.js";
import cookieParser from "cookie-parser";
// import { cookie } from "express-validator";
import cookies from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const captainMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  // || req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded.captainId);
    if (!captain) {
      return res.status(401).json({ message: "Captain not found" });
    }
    req.captain = captain;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token is not valid" });
  }
};
