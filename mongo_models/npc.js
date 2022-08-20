// REQUIRE MONGOOSE 
const mongoose = require('mongoose')

// CREATE SHORTHAND FOR THE SCHEMA CONSTRUCTOR
const { Schema } = mongoose 

// SCHEMA
const npcSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, default: '' },
})

// MODEL AND EXPORT
const NPC = mongoose.model('NPC', npcSchema)
module.exports = NPC
