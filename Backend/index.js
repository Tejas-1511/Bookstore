import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from './route/book.route.js'
import cors from "cors"
import userRoute from "./route/user.route.js"

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT =process.env.PORT || 4000;
const Url=process.env.MongoDBUrl
//connection to Mongo
try {
    mongoose.connect(Url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
});
console.log("Connection to db established");
} catch (error) {
    console.log("Connection Failure",error);
}

//defining route
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})
//npm i nodemon , npm i dotenv ,npm init, npm i mongoose, npm i cors, npm i bcryptjs