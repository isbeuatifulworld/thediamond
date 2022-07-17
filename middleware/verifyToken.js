const jwt = require('jsonwebtoken');

module.exports = function(req, res, next){
    const token = req.headers['authorization'];

    if(!token) return res.status(401).send('Access Denied');

    try{
        const verifyed = jwt.verify(token, 'Diamond2022');
        req.user = verifyed;
        next();
    }catch(err){
        res.status(400).send('Invaild Token')
    }
}                    