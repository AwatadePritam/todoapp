const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    todoName:{
        type :String,
        required:true
    },
    assignee: {
        type :String,
        required:true
    },
    priority :{
        type :String,
        required:true
    }
})

const todoModel = mongoose.model('todo',todoSchema)

module.exports = todoModel