"use strict";
// require models folder
const db = require('../mongo_models/index.js');
// hardcoded data for seeding
db.Npc.create([
    {
        name: 'Bug Catcher Ricky',
        image: ''
    },
    {
        name: 'School Kid Terrance',
        image: ''
    },
    {
        name: 'Gary',
        image: ''
    }
])
    .then(() => {
    console.log('NPC Success!');
    process.exit();
})
    .catch(err => {
    console.log('Failure!', err);
    process.exit();
});
