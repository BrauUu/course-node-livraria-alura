import { Router } from 'express';
import BookController from '../controller/bookController.js'

const router = Router()

router.get('/books', BookController.getAllBooks)

router.post('/books', BookController.createBook)

export default router;