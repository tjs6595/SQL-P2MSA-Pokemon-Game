// DEPENDENCIES
// create router and save it to pokemon variable
import express from 'express'
const methodOverride = require('method-override')
const npcs = express.Router()
const Npc = require('../mongo_models/npc.js')
// reference the models folder
const db = require('../mongo_models')


// MIDDLEWARE
npcs.use(methodOverride('_method'))



// INDEX ROUTE
// FIND ALL NPCs
npcs.get('/', async (req: any, res: any) => {
    db.Npc.find()
        .then((npcs: any) => {
            res.render('npcs/index', { npcs })
        })
        .catch((err: any) => {
            console.log(err)
            res.render('error404')
        })
})

// EXPORT
module.exports = npcs