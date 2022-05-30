const express = require('express')
const router=express.Router()
const {login,
       register,
       checkUserName,
       checkUserEmail,
       /*dashboard
       logout,
forgetPassword*/}=require('../controllers/auth.js')

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/checkUserName').post(checkUserName)
router.route('/checkUserEmail').post(checkUserEmail)
//router.get('/').get(dashboard);//secret route

module.exports=router