// DEPENDENCIES
// create router and save it to pokemon variable
const express = require('express')
const methodOverride = require('method-override')
const pokemon = express.Router()
const Pokemon = require('../mongo_models/pokemon.js')
// reference the models folder
const db = require('../mongo_models')


// MIDDLEWARE
pokemon.use(methodOverride('_method'))



// INDEX ROUTE
// SHOW ALL POKEMON
pokemon.get('/', async (req, res) => {
    db.Pokemon.find()
        .then((pokemon) => {
            res.render('mockmon/index', { pokemon })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

// CREATE NEW MOCKMON
pokemon.post('/', (req, res) => {
    console.log(req.body)
    res.send('/POST mockmon')
  })

// NEW MOCKMON PAGE
// must be above get by ID route
pokemon.get('/new', (req, res) => {
    res.render('mockmon/new')
  })


// EXPORT
module.exports = pokemon