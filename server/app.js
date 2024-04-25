import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/router.js";
import bodyParser from "body-parser";
import { checkUser } from "./middleware/auth.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(bodyParser.json());
app.use(router);
app.use(express.static("./uploads"));

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("connected to database successfully.");
  } catch (error) {
    console.log(error);
  }
};

connectDB();

app.get("/", checkUser, (req, res) => {
  const username = res.locals.username;
  const response = {
    message: "Welcome to Dave's Blog!",
    isLogedin: username ? true : false,
  };
  if (username) {
    response.username = username;
  }
  res.status(200).json(response);
});

app.listen(PORT, () => {
  console.log("Server is started");
});

export default app;