const express = require('express')
const router = express.Router()
const userController = require('../controllers/UserController')
const verify = require('../middleware/verifyToken');

router.get('/users/:id',verify, userController.user_details);
router.post('/update',verify, userController.user_update);
 
module.exports = router