const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    avtar:{
        type: String,
    },
    address:{
        type: String,
    },
    country:{
        type: Number,
    },
    phone_no:{
        type: String,
    },
    gender:{
        type: Number,
    },
    is_active:{
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('users',userSchema)