const express = require('express')
const router=express.Router()
const {getIntezmenyek,
       createIntezmeny,
       updateIntezmeny,
       deleteIntezmeny}=require('../controllers/intezmenyek.js')

router.route('/').get(getIntezmenyek)
router.route('/').post(createIntezmeny)
router.route('/:id').put(updateIntezmeny)
router.route('/:id').delete(deleteIntezmeny)

module.exports=router