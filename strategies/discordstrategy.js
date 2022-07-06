const DiscordStrategy = require('passport-discord').Strategy
const passport = require('passport')
const config = require('../config.json')
const mysql = require('mysql')
const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    console.log(req.sessionID)
})

passport.use(new DiscordStrategy({
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET,
    callbackURL: config.CLIENT_REDIRECT,
    scope: ['identify', 'guilds', 'email']
}, (acessToken, refreshToken, profile, done) =>{
    const con = mysql.createPool(config.mysql)
    const discordId = profile.id
    const name = profile.username
    const email = profile.email
    const avatar = profile.avatar
    con.query(`SELECT * FROM web_users WHERE id_user = '${discordId}'`, (err, row) => {
        if(row[0]) return
       
        con.query(`INSERT INTO web_users (id_user, name, avatar, email) VALUES ('${discordId}', '${name}', '${avatar}', '${email}')`,(err, row)=>{
            if(err) throw err
        })
    })
    if(discordId){
        done(null, discordId)
    }else{
       console.log('done') 
    }

    passport.serializeUser(function(user, done) {
        done(null, user);
    })
    passport.deserializeUser((user, done) => {
        done(null, user);
    })
}))