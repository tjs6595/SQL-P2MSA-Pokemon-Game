"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const methodOverride = require('method-override');
// switched to "const mongoose" instead of "const { Mongoose }"" and made the 
// lowercase for "mongoose" in the MONGOOSE CONNECTION code because that was the way
// it was formatted in the acitivities. If anything goes weird with Mongoose,
// switch it back.
const mongoose = require('mongoose');
// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
// Defines the view engine for JSX files
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
// allows access to public folder (such as for CSS)
app.use(express_1.default.static('public'));
// body parser for recieving data
app.use(express_1.default.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
//MONGOOSE CONNECTION
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log('connected to mongo: ', process.env.MONGO_URI); });
// CONTROLLERS 
// MUST EDIT POKEMON TO BE DIFFERENT NAME
app.use('/mockmon', require('./controllers/pokemon_controller'));
app.use('/npcs', require('./controllers/npcs_controller'));
// ROOT
app.get('/', (req, res) => {
    // res.status(200).json({
    //     message: 'Welcome to a Pokemon Mock Up'
    // })
    res.render('home');
});
// INSTRUCTIONS PAGE
app.get('/instructions', (req, res) => {
    res.render('instructions');
});
// PLAY GAME PAGE
app.get('/play', (req, res) => {
    res.render('play');
});
// ERROR 404 ROUTE
app.get('*', (req, res) => {
    res.render('error404');
});
// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🐱 Pokemon on port: ${process.env.PORT}`);
});
