import express from "express";
import bookRoutes from '../routes/bookRoutes.js'


const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).json({title: "Livraria Alura"})
    })

    app.use(
        express.json(),
        bookRoutes
    )
}

export default routes;

