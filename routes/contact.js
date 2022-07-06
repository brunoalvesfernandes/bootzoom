const router = require('express').Router()
const passport = require('passport')

router.get('/', (req,res)=>{
    res.render('contact')
})


module.exports = router