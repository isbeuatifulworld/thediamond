const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    created_by:{
        type: String,
        required:true
    },
    is_active:{
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('diamonds',userSchema)