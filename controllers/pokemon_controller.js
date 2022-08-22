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
    if(!req.body.image){
        req.body.image = 'http://placekitten.com/400/400'
    }
    // if something isn't working here, check Rest-RANT Part 5
    res.redirect('/mockmon')
  })

// NEW MOCKMON PAGE
// must be above get by ID route
pokemon.get('/new', (req, res) => {
    res.render('mockmon/new')
  })

// SHOW SPECIFIC MOCKMON
pokemon.get('/:id', (req, res) => {
  db.Pokemon.findById(req.params.id)
  .then( pokemon => {
      res.render('mockmon/show', { pokemon })
  })
  .catch( err => {
    console.log('err', err)
    res.render('error404')
  })
})

// EDITS MOCKMON BY ID
pokemon.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
  // db.Place.findByIdAndUpdate(req.params.id, req.body)
  // .then(() => {
  //   res.redirect(`/places/${req.params.id}`)
  // })
  // .catch(err => {
  //   console.log('err', err)
  //   res.render('error404')
  // })
})

  // DELETE MOCKMON
pokemon.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
    // db.Pokemon.findByIdAndDelete(req.params.id)
    // .then(mockmon => {
    //     res.redirect('/mockmon')
    // })
    // .catch(err => {
    //     console.log('err', err)
    //     res.render('error404')
    // })
  })

  // EDIT PLACE ROUTE
pokemon.get('/:id/edit', (req, res) => {
  // keeping that for future reference
  res.send('GET edit form stub')
  // //look up place data by ID and send it to edit.jsx view
  // db.Place.findById(req.params.id)
  // .then(place => {
  //   res.render('places/edit', { place })
  // })
  // .catch(err => {
  //   res.render('error404')
  // })
})

// EXPORT
module.exports = pokemon