const mongoose = require('mongoose');
const dotenv = require('dotenv');
const diamond = require('../models/diamond');

dotenv.config();




mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Mongdb Atlas Connected..."))
.catch((err)=>{console.log(err)})

// mongoose.connection.on('connected', ()=>console.log('db conection clear'))
// mongoose.connection.on('error', (err)=>console.log(err.message))