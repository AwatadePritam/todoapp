const todoModel = require('../models/todo.model')

exports.saveTodo = async (req,res) =>{
      try {
        // console.log(req.body)
        const {todoName,assignee,priority} =req.body

        if(!todoName || !assignee || !priority){
            return res.status(404).json({
                messsage:"Please fill the form"
            })
        }

        const savedTodo = await todoModel.create({todoName:todoName,assignee:assignee,priority:priority})

        if(!savedTodo){
            return res.status(404).json({
                messsage:"Failed to create new todo"
            })
        }

        return res.status(200).json({
            messsage:"Todo created successfully"
        })
       
      } catch (error) {
        
      }
}

exports.getAllTodos = async (req, res) => {
    try {
        const allTodos = await todoModel.find();
        return res.status(200).json({
            allTodos,
        })
    } catch (error) {
        
    }
}

exports.deleteTodo = async(req,res)=>{
    try {
        const todoId = req.params.id;
      
        if(!todoId){
            return res.status(404).json({
                message:'Id not found. Unable to delete'
            })
        }

        await todoModel.findByIdAndDelete(todoId)

        return res.status(200).json({
            todoDeleteSuccess: true
        })

    } catch (error) {
        
    }
}