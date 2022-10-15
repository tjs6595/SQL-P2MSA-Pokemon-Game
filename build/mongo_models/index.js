"use strict";
require('dotenv').config();
// CONNECT TO MONGOOSE
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// exports
module.exports.Pokemon = require('./pokemon');
module.exports.Npc = require('./npc');
