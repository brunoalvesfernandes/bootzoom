const router = require('express').Router()
const passport = require('passport')

router.get('/', (req,res)=>{
    res.render('rules')
})


module.exports = router