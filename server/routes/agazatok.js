const express = require('express')
const router=express.Router()
const {getAgazatok,
       createAgazat,
       updateAgazat,
       deleteAgazat}=require('../controllers/agazatok.js')

router.route('/').get(getAgazatok)
router.route('/').post(createAgazat)
router.route('/:id').put(updateAgazat)
router.route('/:id').delete(deleteAgazat)

module.exports=router