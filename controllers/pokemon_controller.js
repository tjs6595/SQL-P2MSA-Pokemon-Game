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
// FIND ALL POKEMON
pokemon.get('/', async (req, res) => {
    db.Pokemon.find()
        .then((pokemon) => {
            res.render('pokemon/index', { pokemon })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })

    // let pokemon = [    {
    //     Nickname: 'Pokemon 1',
    //     image: '',
    //     level: 3,
    //     species: 'Caterpie',
    //     type_1: 'Bug',
    //     type_2: '',
    //     ability: 'Shield Dust',
    //     hit_points: 8,
    //     defense: 8,
    //     player: '',
    //     move_1: 'Tackle',
    //     move_2: 'String Shot',
    //     Move_3: '',
    //     Move_4: ''        
    // },
    // {
    //     Nickname: 'Pokemon 2',
    //     image: '',
    //     level: 4,
    //     species: 'Pidgey',
    //     type_1: 'Normal',
    //     type_2: 'Flying',
    //     ability: 'Keen Eye',
    //     hit_points: 9,
    //     defense: 9,
    //     player: '',
    //     move_1: 'Tackle',
    //     move_2: '',
    //     Move_3: '',
    //     Move_4: ''    
    // }]
    // res.render('pokemon/index', { pokemon })
})

// EXPORT
module.exports = pokemon