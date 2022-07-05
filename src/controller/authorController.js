import AuthorModel from '../models/Author.js'

class AuthorController {

    static async findAllAuthors(req, res) {
        try {
            const authors = await AuthorModel.find()
            res.status(200).json(authors)
        } catch (err) {
            res.status(400).json(err)
        }
    }

    static async findOneAuthor(req, res) {
        try {
            const { id } = req.params
            const author = await AuthorModel.findById(id)
            res.status(200).json(author)
        } catch (err) {
            res.status(400).json(err)
        }
    }

    static async createAuthor(req, res) {
        try {
            const author = await AuthorModel.create(req.body)
            res.status(201).json({ message: "sucess" })
        } catch (err) {
            res.status(400).json(err)
        }
    }

    static async updateAuthor(req, res) {
        try {
            const { id } = req.params
            const author = await AuthorModel.findByIdAndUpdate(id, {$set : req.body})
            res.status(204).json()
        } catch (err) {
            res.status(400).json(err)
        }
    }

    static async deleteAuthor(req, res) {
        try {
            const { id } = req.params
            const author = await AuthorModel.findByIdAndDelete(id)
            res.status(204).json()
        } catch (err) {
            res.status(400).json(err)
        }
    }

}

export default AuthorController;