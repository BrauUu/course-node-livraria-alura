import { Router } from 'express';
import BookController from '../controller/bookController.js'

const router = Router()

router.get('/books', BookController.findAllBooks)

router.get('/books/publisher/:publisher', BookController.findAllBooksByPublisher)

router.get('/books/:id', BookController.findOneBook)

router.post('/books', BookController.createBook)

router.put('/books/:id', BookController.updateBook)

router.delete('/books/:id', BookController.deleteBook)

export default router;