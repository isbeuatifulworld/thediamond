const express = require('express')
const router = express.Router()
const authController = require('../controllers/AuthController')


// router.post('/login',verifyToken, authController.login);
router.post('/login', authController.login);
router.post('/register', authController.register);


module.exports = router