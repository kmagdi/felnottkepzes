const express = require('express')
const router=express.Router()
const {createJelentkezes,
        checkEmail}=require('../controllers/jelentkezes.js')

router.route('/check').get(checkEmail)
router.route('/').post(createJelentkezes)
//router.route('/:id').put(updateTanfolyam)
//router.route('/:id').delete(deleteTanfolyam)

module.exports=router