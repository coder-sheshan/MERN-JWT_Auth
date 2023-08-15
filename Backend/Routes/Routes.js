// const express = require('express')
// const router = express.Router()
// const UserController =   require('../Controller');
// // Create a new employee
// router.post('/user/create', UserController.create);
// router.post('/user/login', UserController.login);
// router.get('/user/home', UserController.Home);
// module.exports = router

const express = require('express');
const router = express.Router();


router.post('/user/create', (req,res) => {
    res.status(200).send(
        {
            status:200,
            Msg: "Successfully Created"
        }
    );
})

router.post('/user/login', (req,res) => {
    res.status(200).send(
        {
            status:200,
            Msg: "Successfully LoggedIn"
        }
    );
})

router.get('/user/home', (req,res) => {
    res.status(200).send(
        {
            status:200,
            Msg: "Successfully View Home"
        }
    );
})

module.exports = router