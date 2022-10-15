"use strict";
// Pokemon Index Page
// THIS IS JUST A TEST!
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
const React = require("react");
const Def = require('../default');
//stub function for index
//accepts data paramter from index
function index(data) {
    //formats data into HTML so page can display it
    let pokeFormatted = data.pokemon.map((pokemon) => {
        return (React.createElement("div", { className: 'col-sm-4', style: { margin: '15px 0px 15px 0px ' } },
            React.createElement("h3", null,
                React.createElement("a", { href: `/mockmon/${pokemon.id}` }, pokemon.species)),
            React.createElement("img", { className: 'mockImg', src: pokemon.image, alt: pokemon.name }),
            React.createElement("img", { src: pokemon.sprite, alt: pokemon.sprite })));
    });
    return (
    // Wrapping in Def component
    React.createElement(Def, null,
        React.createElement("main", null,
            React.createElement("h1", null, "Mockdex"),
            React.createElement("div", { className: 'row' }, pokeFormatted))));
}
// exports index
module.exports = index;
