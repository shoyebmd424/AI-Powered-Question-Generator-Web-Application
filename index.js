import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import gptRouter from "./Router/GPT.js";
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/", gptRouter);

app.listen(8088, (req, res) => {
  console.log("server running on port " + 8088);
});
