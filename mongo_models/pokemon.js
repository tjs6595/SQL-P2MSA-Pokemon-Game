// REQUIRE MONGOOSE 
const mongoose = require('mongoose')

// CREATE SHORTHAND FOR THE SCHEMA CONSTRUCTOR
const { Schema } = mongoose 

// SCHEMA
const pokemonSchema = new Schema({
    nickname: { type: String },
    image: { type: String, default: '' },
    sprite: { type: String, default: '' },
    level: {type: Number, default: 1 },
    species: {type: String},
    type_1: {type: String},
    type_2: {type: String},
    ability: {type: String},
    dex_entry: {type: String},
    hitpoints: {type: Number, default: 5 },
    defense: {type: Number, default: 5 },
    player: {type: String },
    move_1: {type: String},
    move_2: {type: String},
    move_3: {type: String},
    move_4: {type: String}
})

// MODEL AND EXPORT
const Pokemon = mongoose.model('Pokemon', pokemonSchema)
module.exports = Pokemon
