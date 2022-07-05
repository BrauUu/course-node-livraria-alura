import BookModel from '../models/Book.js'

class BookController {

    static async findAllBooks(req, res) {
        try {
            const books = await BookModel.find()
            res.status(200).json(books)
        } catch (err) {
            res.status(400).json(err)
        }
    }

    static async findOneBook(req, res) {
        try {
            const { id } = req.params
            const book = await BookModel.findById(id)
            res.status(200).json(book)
        } catch (err) {
            res.status(400).json(err)
        }
    }

    static async createBook(req, res) {
        try {
            const book = await BookModel.create(req.body)
            res.status(201).json({ message: "sucess" })
        } catch (err) {
            res.status(400).json(err)
        }
    }

    static async updateBook(req, res) {
        try {
            const { id } = req.params
            const book = await BookModel.findByIdAndUpdate(id, {$set : req.body})
            res.status(204).json()
        } catch (err) {
            res.status(400).json(err)
        }
    }

    static async deleteBook(req, res) {
        try {
            const { id } = req.params
            const book = await BookModel.findByIdAndDelete(id)
            res.status(204).json()
        } catch (err) {
            res.status(400).json(err)
        }
    }

}

export default BookController;