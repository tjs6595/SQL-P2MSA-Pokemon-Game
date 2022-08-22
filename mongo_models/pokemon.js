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
    species: {type: String, required: true, enum: ['Caterpie', 'Pidgey', 'Rattata', 'Charmander', 'Spearow', 'Squirtle' ]},
    type_1: {type: String, required: true, enum: ['Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Bug', 'Electric' ]},
    type_2: {type: String, enum: ['Normal', 'Fire', 'Water', 'Grass', 'Flying', 'Bug', 'Electric' ]},
    ability: {type: String, required: true, enum: ['Torrent', 'Blaze', 'Keen Eye', 'Run Away', 'Shield Dust' ]},
    dex_entry: {type: String},
    hitpoints: {type: Number, default: 5 },
    defense: {type: Number, default: 5 },
    player: {type: String },
    move_1: {type: String, required: true, enum: ['Tackle', 'String Shot', 'Sand Attack', 'Tail Whip', 'Quick Attack', 'Scratch', 'Growl', 'Peck', 'Leer' ]},
    move_2: {type: String, enum: ['Tackle', 'String Shot', 'Sand Attack', 'Tail Whip', 'Quick Attack', 'Scratch', 'Growl', 'Peck', 'Leer' ]},
    move_3: {type: String, enum: ['Tackle', 'String Shot', 'Sand Attack', 'Tail Whip', 'Quick Attack', 'Scratch', 'Growl', 'Peck', 'Leer' ]},
    move_4: {type: String, enum: ['Tackle', 'String Shot', 'Sand Attack', 'Tail Whip', 'Quick Attack', 'Scratch', 'Growl', 'Peck', 'Leer' ]}
})

// MODEL AND EXPORT
const Pokemon = mongoose.model('Pokemon', pokemonSchema)
module.exports = Pokemon
