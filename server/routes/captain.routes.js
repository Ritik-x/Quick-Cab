import {
  getCaptain,
  loginCaptain,
  logoutController,
  registerCaptain,
} from "../controllers/captain.controller.js";
import express from "express";
import { captainMiddleware } from "../middlewares/captainMiddleware.js";
const Captainrouter = express.Router();

Captainrouter.post("/register", registerCaptain);
Captainrouter.post("/login", captainMiddleware, loginCaptain);
Captainrouter.get("/profie/:_id", captainMiddleware, getCaptain);
Captainrouter.delete("/logout", captainMiddleware, logoutController);
export default Captainrouter;
