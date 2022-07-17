const User = require('../models/user')


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
        const user = await User.findById(req.params.id)
            user.name = req.body.name

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
    user_delete
}