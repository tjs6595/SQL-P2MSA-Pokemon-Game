"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
// create router and save it to pokemon variable
const express_1 = __importDefault(require("express"));
const methodOverride = require('method-override');
const pokemon = express_1.default.Router();
const Pokemon = require('../mongo_models/pokemon.js');
// reference the models folder
const db = require('../mongo_models');
// MIDDLEWARE
pokemon.use(methodOverride('_method'));
// INDEX ROUTE
// SHOW ALL POKEMON
pokemon.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    db.Pokemon.find()
        .then((pokemon) => {
        res.render('mockmon/index', { pokemon });
    })
        .catch((err) => {
        console.log(err);
        res.render('error404');
    });
}));
// CREATE NEW MOCKMON
pokemon.post('/', (req, res) => {
    console.log(req.body);
    db.Pokemon.create(req.body)
        .then(() => {
        res.redirect('/mockmon');
    })
        .catch((err) => {
        console.log('err', err);
        res.render('error404');
    });
});
// NEW MOCKMON PAGE
// must be above get by ID route
pokemon.get('/new', (req, res) => {
    res.render('mockmon/new');
});
// SHOW SPECIFIC MOCKMON
pokemon.get('/:id', (req, res) => {
    db.Pokemon.findById(req.params.id)
        .then((pokemon) => {
        res.render('mockmon/show', { pokemon });
    })
        .catch((err) => {
        console.log('err', err);
        res.render('error404');
    });
});
// EDITS MOCKMON BY ID
pokemon.put('/:id', (req, res) => {
    // res.send('PUT /places/:id stub')
    db.Pokemon.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
        res.redirect(`/mockmon/${req.params.id}`);
    })
        .catch((err) => {
        console.log('err', err);
        res.render('error404');
    });
});
// DELETE MOCKMON
pokemon.delete('/:id', (req, res) => {
    // res.send('DELETE /places/:id stub')
    db.Pokemon.findByIdAndDelete(req.params.id)
        .then((pokemon) => {
        res.redirect('/mockmon');
    })
        .catch((err) => {
        console.log('err', err);
        res.render('error404');
    });
});
// EDIT MOCKMON ROUTE
pokemon.get('/:id/edit', (req, res) => {
    //look up place data by ID and send it to edit.jsx view
    db.Pokemon.findById(req.params.id)
        .then((pokemon) => {
        res.render('mockmon/edit', { pokemon });
    })
        .catch((err) => {
        res.render('error404', err);
    });
});
// EXPORT
module.exports = pokemon;
