// DEPENDENCIES
// create router and save it to pokemon variable
const pokemon = require('express').Router()
// require models folder as db
// gives us access to all models at once
const db = require('../sql_models')
//const db = require('../models')

// EDIT THIS PART WITH ANY DATABASES NEEDED
const { Pokemon } = db

// destructure the Op class from Sequelize package 
//const { Op } = require('sequelize')

// INDEX ROUTE
// FIND ALL POKEMON
pokemon.get('/test', async (req, res) => {
    // // call findAll on Pokemon model and save it as variable
    // try {
    //     console.log("I'm here")
    //     const foundPokemon = await Pokemon.findAll({
    //         where: {
    //             name: { [Op.like]: `%${req.query.name? req.query.name: ''}%`}
    //         }
    //     })
    //     res.status(200).json(foundPokemon)
    // // for catch, send back JSON error with status of 500
    // } catch (error) {
    //     res.status(500).json(error)
    // }
})

// EXPORT
module.exports = pokemon