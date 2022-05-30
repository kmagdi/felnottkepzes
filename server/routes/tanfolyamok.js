const express = require('express')
const router=express.Router()
const {getTanfolyamok,
       createTanfolyam,
       updateTanfolyam,
       deleteTanfolyam}=require('../controllers/tanfolyamok.js')

router.route('/').get(getTanfolyamok)
router.route('/').post(createTanfolyam)
router.route('/:id').put(updateTanfolyam)
router.route('/:id').delete(deleteTanfolyam)

module.exports=router