import express from 'express';

const app = express();
app.use(express.json())

const books = [
    {
        id: 1,
        title: "Lord of the Rings"
    },
    {
        id: 2,
        title: "Harry Potter"
    }
]

app.get('/', (req, res) => {
    res.status(200).send('Base route')
})

app.get('/book/:id', (req, res) => {
    const index = findBookById(req.params.id)
    res.status(200).json(books[index])
})

app.get('/books', (req, res) => {
    res.status(200).json(books)
})

app.post('/book', (req, res) => {
    books.push(req.body)
    res.status(201).json({'message': "sucess"})
})

app.put('/book/:id', (req, res) => {

    const index = findBookById(req.params.id)
    books[index].title = req.body.title 

    res.status(204).json({'message': "sucess"})
})

app.delete('/book/:id', (req, res) => {

    const index = findBookById(req.params.id)
    books.splice(index, 1)
    res.status(204).json({'message': "sucess"})
})


function findBookById(id) {
    const position = books.findIndex(book => book.id == id)
    return position;
}

export default app;