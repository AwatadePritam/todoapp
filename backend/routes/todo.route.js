const express = require('express')
const { saveTodo,getAllTodos, deleteTodo } = require('../controlers/todo')
const router = express.Router()

router.post('/saveTodo',saveTodo )
router.get('/getAllTodos',getAllTodos)
router.delete('/deleteTodo/:id',deleteTodo)

module.exports = router