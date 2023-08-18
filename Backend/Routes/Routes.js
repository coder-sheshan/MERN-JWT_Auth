const express = require('express');
const router = express.Router();

const userController = require('../Controller/UserController');

const { protected }=require('../Middleware/protectedRoutes');




router.post('/user/create', userController.create)

router.post('/user/login', userController.login)

router.get('/user/home', protected, userController.home)

module.exports = router