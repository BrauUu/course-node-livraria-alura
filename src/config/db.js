import 'dotenv/config';
import mongoose from "mongoose";

const user = process.env.DB_USER
const pass = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${user}:${pass}@sandbox.7kbv8.mongodb.net/library-alura`)

const db = mongoose.connection
export default db;

