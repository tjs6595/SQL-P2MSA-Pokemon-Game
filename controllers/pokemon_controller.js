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

// NEW MOCKMON PAGE
// must be above get by ID route
pokemon.get('/new', (req, res) => {
    res.render('mockmon/new')
  })

// // CREATE MOCKMON
// pokemon.post('/', (req, res) => {
//     db.Place.create(req.body)
//     //redirect to index page on success
//     .then( () => {
//       res.redirect('/places')
//     })
//       //creates error message if any
//     .catch( err => {
//       if (err && err.name == 'ValidationError'){
//         let message = 'Validation Error: '
        
//         //array of error messages if there's many
//         for(var field in err.errors){
//           message += `${field} was ${err.errors[field].value}.`
//           message += ` ${err.errors[field].message}`
//         }
//         console.log('Validation error message', message)
  
//         res.render('places/new', { message })
//       }
//       //redirects to 404 page
//       else {
//         res.render('error404')
//       }
//     })
//   })

// EXPORT
module.exports = pokemon