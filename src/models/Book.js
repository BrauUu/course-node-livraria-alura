import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author",
            reuired: true
        },
        publisher: {
            type: String,
            required: false
        },
        pagesNumber: {
            type: Number,
            required: false
        }
    },
    {
        versionKey: false
    }
)

const BookModel = mongoose.model("Book", BookSchema)

export default BookModel;