// REQUIRE MONGOOSE 
const mongoose = require('mongoose')

// CREATE SHORTHAND FOR THE SCHEMA CONSTRUCTOR
const { Schema } = mongoose 

// SCHEMA
const playerSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, default: '' },
    pokemon_list: {ref: 'pokemon'},
})

// MODEL AND EXPORT
const Player = mongoose.model('Player', playerSchema)
module.exports = Player
