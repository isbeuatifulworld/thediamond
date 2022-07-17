const express = require('express');
const helmet = require("helmet");
require('./helpers/init_mongodb');
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')
const fileUpload = require('express-fileupload');

const app = express()
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  }));

require('./models/user');
require('./models/diamond');
app.use(express.json())
app.use(helmet());

app.use('/users',userRouter)
app.use('/auth',authRouter)

app.listen(9000, () => {
    console.log('Server Started...')
})