const User = require('../models/user');
const multer = require('multer');
const fileupload = require('express-fileupload');
// const { application } = require('express');
// app.use(fileupload());



//Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/user');
      },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const uploadImg = multer({storage: storage}).single('avtar');






// Get All User
const user_all = async (req, res) => {
    try{
        const users = await User.find()
        res.json(users)

    }catch(err){
        res.send('Error' + err)
    }
};


// Single All User
const user_details = async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch(err){
        res.send('Error' + err)
    }
};

// Add New User
const user_create = async (req, res) => {
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        work:req.body.work,
        age:req.body.age,
    })

    try{
        const data = await user.save()
        res.send(data)
    }catch(err){
        res.send('Error' + err)
    }
};

// Update All User
const user_update = async (req, res) => {
    try{

        const user = await User.findById(req.body.id)
        
        // app.post('../uploads/user', function(req, res) {
        // });
        const file = req.files.avtar;
        file.mv('./uploads/user' + Date.now()+file.name, (err, result)=>{
            if(err)
                throw err;
            res.send({
                success:true,
                message:"File uploaded"
            });
        })
        console.log(req.files.avtar); // the uploaded file object

            user.email = req.body.email
            user.address = req.body.address
            user.country = req.body.country
            user.phone_no = req.body.phone_no
            user.gender = req.body.gender
            user.avtar = req.file.path

        const users = await user.save()
            res.json(users)

    }catch(err){
            res.send('Error'+ err)
    }
};

// Delete All User
const user_delete = async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        const user_del = await user.delete()
        res.json(user_del)
    }catch(err){
        res.send('Error' + err)
    }
};


module.exports = {
    user_all,
    user_details,
    user_create,
    user_update,
    user_delete,
    uploadImg
}