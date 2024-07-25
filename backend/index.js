const dbConnect = require('./config/dbConnection')
const express = require('express')
const dotenv = require('dotenv')
const todoRouter = require('./routes/todo.route')
const cors = require('cors');

dbConnect();

const app = express()
app.use(cors());
app.use(express.json())
app.use(todoRouter)

app.listen(4000 ,()=>{
    console.log('Server is running on port 4000')
})