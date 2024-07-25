const mongoose = require('mongoose')

const dbConnect = () =>{
    mongoose.connect('mongodb+srv://pritam:pritam123@cluster0.thpbvuc.mongodb.net/tododatabase')
    .then(()=>{
        console.log(' DB Connection established ')
    })
    .catch(error=>{
        console.log(error)
    })
}

module.exports = dbConnect