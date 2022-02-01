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

app.get('/todos/:id', async (req,res) => {
    console.log(req.params.id);
    try {
        const id = req.params.id
        const {rows} = await pool.query("SELECT * FROM tasks WHERE task_id = $1", [id])
        res.send(rows)
    } catch (error) {
        errorHandling(error, res)
    }
})



app.get('/todos', async (req,res) => {
    try {
        const sort = req.query.sort
        const {rows} = await pool.query(`SELECT * FROM tasks ORDER BY task_${sort}`)
        res.send(rows)
    } catch (error) {
        errorHandling(error, res)
    }
})

app.post('/todos', async (req,res) => {
    try {
        const {importance, title, owner} = req.body
        await pool.query(`INSERT INTO tasks(task_importance, task_title, task_owner, task_complete) VALUES ($1, $2, $3, $4)`,
            [importance, title, owner, false]
        );
        res.send('updated');
    } catch (err) {
        res.status(500);
        res.json(err);
    }
})

app.patch('/todos/:id', async (req,res) => {
    try {
        const task_id = req.params.id
        const dbData = await pool.query(`SELECT * FROM tasks WHERE task_id = ${task_id}`)
        const singleTask = dbData.rows[0];
        let {task_importance, task_title, task_owner, task_complete} = singleTask;
        if (req.body.importance) {
            task_importance = req.body.importance
        }
        if (req.body.title)  {
            task_title = req.body.title
        }
        if (req.body.owner) {
            task_owner = req.body.owner
        }
        if (req.body.complete) {
            task_complete = !task_complete
        }
        await pool.query(`UPDATE tasks SET task_importance = $1, task_title = $2, task_owner = $3, task_complete = $4 WHERE task_id = $5`,
            [task_importance, task_title, task_owner, task_complete, task_id]
        );
        res.send('updated');
    } catch (error) {
        res.status(500);
        res.json(error);
    }
})

app.delete('/todos/:id', async (req,res) => {
    try {
        const task_id = req.params.id
        await pool.query(`DELETE FROM tasks WHERE task_id = ${task_id}`) 
        res.send('deleted')   
    } catch (error) {
        res.status(500);
        res.json(error);
    }
})

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
})

function errorHandling(error, res) {
    res.status(500).send(error)
}