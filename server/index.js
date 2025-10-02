import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./db/db.js";
import router from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import Captainrouter from "./routes/captain.routes.js";
const app = express();
const port = process.env.PORT || 5000;
connectDb();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/user", router);
app.use("/captain", Captainrouter);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
