const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const passport = require('passport')
const discordStrategy = require('./strategies/discordstrategy')

//Routes
const authRoute = require('./routes/auth')
const dashboardRoute = require('./routes/dashboard')
const panelRoute = require('./routes/panel')
const contactRoute = require('./routes/contact')
const aboutRoute = require('./routes/about')
const commandsRoute = require('./routes/commands')
const rulesRoute = require('./routes/rules')


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
    secret: 'some random secret',
    resave: false,
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false,
    name: 'discord.oauth2'
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', isAuthorized, (req, res) =>{
    res.render('home')
})

//Get Route
app.use('/auth', authRoute)
app.use('/dashboard', dashboardRoute)
app.use('/panel', panelRoute)
app.use('/contact', contactRoute)
app.use('/about', aboutRoute)
app.use('/commands', commandsRoute)
app.use('/rules', rulesRoute)

app.get('/auth/redirect',  (req, res)=>{
})

function isAuthorized(req, res, next) {
    if(req.user) {
        res.redirect('/dashboard')
    }else {
        next()
    }
}

app.listen(3000)