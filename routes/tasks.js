const express = require('express');
const pool = require('../database');
const router = express.Router();

/*
    BASE URL /tasks
    GET / - Get all tasks
    POST / - Create a new task
    GET /:id - Get a task by id
    PUT/:id - Update a task by id
    DELETE /:id - Delete a task by id
    Create, Read, Update, Delete - CRUD

    read - select
    create - insert
    
*/

/* GET home page. */
router.get('/', async (req, res, next) => {
    await pool.promise()
    .query('SELECT * FROM tasks')
    .then(([rows,fields]) => {
        console.log(rows);
        res.json(rows);

    });
});


module.exports = router;
