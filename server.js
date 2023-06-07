import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import authRoutes from './routes/authRoute.js'
import mongoose from "mongoose";
dotenv.config();
import cors from 'cors'

// database connection
(
  async()=>{
      try {
      await mongoose.connect(process.env.MONGO_URL,{dbName:'samuna'});
      console.log('Connected database')
      } catch (error) {
        console.log(error);
      }
   }
)()


//restobject
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/",(req,res) =>{
    res.send("<h1>Welcome to handicraft aggregator website</h1>");
});

//PORT
const PORT = process.env.PORT || 5000;

//run listen
app.listen(PORT,() =>{
    console.log(
        'Server Running on ${process.env.DEV_MODE} mode on port ${PORT}'.bgCyan.white);
});