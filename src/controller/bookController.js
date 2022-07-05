import BookModel from '../models/Book.js'

class BookController {

    static async getAllBooks (req, res) {
        const books = await BookModel.find()
        res.status(200).json(books)
    }

    static async createBook (req, res) {
        try {
            const book = await BookModel.create(req.body)
            res.status(201).json({message: "sucess"})
        } catch (err) {
            res.status(400).json(err)
        }
    }

}

export default BookController;