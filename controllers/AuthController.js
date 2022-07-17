const User = require('../models/user');
const jwt = require('jsonwebtoken');
// const { compare } = require('bcrypt');
// const bcrypt = require('bcryptjs');

// Login
const login = async (req, res) => {

    const users = await User.findOne({email: req.body.email, is_active:1});
    if(!users) return res.status(400).send('Email or password is wrong')

    if(req.body.password == users.password){
        jwt.sign({users}, 'Diamond2022', (err , token)=>{
            res.json({
                token,
                users                
            })
        })
    }else{
        return res.status(400).send('Invalid password')
    }
};

// Register New User
const register = async (req, res) => {

    // const salt = await bcrypt.genSalt(10);
    // const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    try{
        const data = await user.save()
        res.send(data)
    }catch(err){
        res.send('Error' + err)
    }
};


module.exports = {
    login,
    register
}