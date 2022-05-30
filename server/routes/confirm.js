const express = require('express')
const router=express.Router()
const {confirmation}=require('../controllers/confirmation.js')

router.route('/:token').get(confirmation)

module.exports=router