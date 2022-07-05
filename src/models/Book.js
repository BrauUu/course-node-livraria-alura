import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        reuired: true
    },
    publisher: {
        type: String,
        required: true
    },
    pagesNumber: {
        type: Number
    }
},
{
    versionKey: false
}
)

const BookModel = mongoose.model("Book", BookSchema)

export default BookModel;