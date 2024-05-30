import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    id: Number,
        type: String,
        price: Number,
        category: String,
        title: String,
        Images: String
})

const Book=mongoose.model("Book",bookSchema);//'Book' is the name of collection oin mongo

export default Book