import express from 'express';
const app = express()
import dotenv from 'dotenv'

dotenv.config()

import pg from 'pg'
const pool = new pg.Pool ({
    name: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD
})

const PORT = process.env.PORT || 8080;

app.use(express.json())

app.get('/todos', async (req,res) => {
    try {
        const {rows} = await pool.query("SELECT * FROM tasks ORDER BY id")
        res.send(rows)
    } catch (error) {
        errorHandling(error, res)
    }
})

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})

function errorHandling(error, res) {
    res.status(500).send(error)
}