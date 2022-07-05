import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        nationality: {
            type: String,
            required: false
        }
    },
    {
        versionKey: false
    }
)

const AuthorModel = mongoose.model("Author", AuthorSchema)

export default AuthorModel;