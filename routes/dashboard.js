const router = require('express').Router()
const passport = require('passport')
const config = require('../config.json')
const mysql = require('mysql')

const con = mysql.createPool(config.mysql)

function isAuthorized(req, res, next) {
    if(req.user) {
        next()
    }else {
        res.redirect('/')
    }
}

router.get('/', isAuthorized,(req,res)=>{
    con.query(`SELECT * FROM web_users WHERE id_user = '${req.user}'`, (err, row) => {
        //if(row[0]) return

        if(err) console.log(err)

        let id = row[0].id_user
        let avatar = row[0].avatar

        res.render('logged', {
            url: 'https://cdn.discordapp.com/avatars/'+id+'/'+avatar+'.png'
        })
    })
    
})


module.exports = router