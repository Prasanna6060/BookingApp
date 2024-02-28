import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

import hotelRoutes from './routes/hotel.routes.js'

mongoose.connect(process.env.MONGO_URI)
 .then(() => {
    console.log("Connected to MongoDb");
 })
 .catch((err) =>
 console.log(err)
 ) 
 

const app = express();

// middlewares
app.use(express.json());
app.use(cors())
app.use('/api/hotels', hotelRoutes )

const Port = process.env.PORT;

app.listen(Port,() => {
    console.log(`Server listening on port ${Port}`)
})