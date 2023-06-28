import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("<h1>Welcome to handicraft aggregator website</h1>");
});

// database connection
mongoose
  .connect(process.env.MONGO_URL, { dbName: "samuna" })
  .then(() => {
    console.log("Conected successfully");
  })
  .catch((e) => {
    console.log(e);
  });

console.log("Connected database");

//restobject

//middlewares

//routes

//rest api

//PORT
const PORT = process.env.PORT || 4001;

//run listen
app.listen(5000, () => {
  console.log(
    "Server Running on ${process.env.DEV_MODE} mode on port ${PORT}".bgCyan
      .white
  );
});
