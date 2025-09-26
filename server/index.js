import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./db/db.js";
import router from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
const app = express();
const port = process.env.PORT || 5000;
connectDb();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/user", router);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
