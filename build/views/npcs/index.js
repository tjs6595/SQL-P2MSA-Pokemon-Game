"use strict";
// Pokemon Index Page
// THIS IS JUST A TEST!
// DEPENDENCIES
const React = require('react');
const Def = require('../default');
//stub function for index
//accepts data paramter from index
function index(data) {
    //formats data into HTML so page can display it
    let npcFormatted = data.npcs.map((npcs) => {
        return (React.createElement("div", null,
            React.createElement("h3", null, npcs.name)));
    });
    return (
    // Wrapping in Def component
    React.createElement(Def, null,
        React.createElement("main", null,
            React.createElement("h1", null, "NPC List"),
            npcFormatted)));
}
// exports index
module.exports = index;
