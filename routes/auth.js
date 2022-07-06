const router = require('express').Router()
const passport = require('passport')

router.get('/', passport.authenticate('discord'))

router.get('/redirect',passport.authenticate('discord', {
    failureRedirect: '/',
    successRedirect: '/dashboard'
}))

router.get("/logout", (req, res) => {
    req.logout(req.user, err => {
        if(err) return next(err);
        res.redirect("/");
    })
})

module.exports = router