import { Router } from 'express';
import AuthorController from '../controller/authorController.js'

const router = Router()

router.get('/authors', AuthorController.findAllAuthors)

router.get('/authors/:id', AuthorController.findOneAuthor)

router.post('/authors', AuthorController.createAuthor)

router.put('/authors/:id', AuthorController.updateAuthor)

router.delete('/authors/:id', AuthorController.deleteAuthor)

export default router;