// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))

// Defines the view engine for JSX files
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// allows access to public folder (such as for CSS)
app.use(express.static('public'))

// SEQUELIZE CONNECTION
// const sequelize = new Sequelize(process.env.PG_URI)

// try {
//     sequelize.authenticate() 
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`) 
// }


// ROOT
app.get('/', (req, res) => {
    // res.status(200).json({
    //     message: 'Welcome to a Pokemon Mock Up'
    // })
    res.render('home')
})

// INSTRUCTIONS PAGE
app.get('/instructions', (req, res) => {
    res.render('instructions')
})

// PLAY GAME PAGE
app.get('/play', (req, res) => {
    res.render('play')
})

// ERROR 404 ROUTE
app.get('*', (req, res) => {
    res.render('error404')
})

// CONTROLLERS 
// MUST EDIT POKEMON TO BE DIFFERENT NAME
const pokemonController = require('./controllers/pokemon_controller')
app.use('/pokemon', pokemonController)

// const eventsController = require('./controllers/events_controller')
// app.use('/events', eventsController)

// const stagesController = require('./controllers/stages_controller')
// app.use('/stages', stagesController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🐱 Pokemon on port: ${process.env.PORT}`)
})