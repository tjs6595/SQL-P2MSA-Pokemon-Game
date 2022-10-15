"use strict";
// DEPENDENCIES
const React = require('react');
const Def = require('./default');
// import tall_grass from './images/tall_grass_screenshot.png'
function instructions() {
    return (React.createElement(Def, null,
        React.createElement("main", null,
            React.createElement("h1", null, "INSTRUCTIONS"),
            React.createElement("div", null,
                React.createElement("h4", null, "Controls"),
                React.createElement("div", { className: "instructions" },
                    React.createElement("p", null,
                        "Player movement keys:",
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                "A = ",
                                React.createElement("i", { className: "fa-solid fa-arrow-left" })),
                            React.createElement("li", null,
                                "W = ",
                                React.createElement("i", { className: "fa-solid fa-arrow-up" })),
                            React.createElement("li", null,
                                "S = ",
                                React.createElement("i", { className: "fa-solid fa-arrow-down" })),
                            React.createElement("li", null,
                                "D = ",
                                React.createElement("i", { className: "fa-solid fa-arrow-right" }))))),
                React.createElement("h4", null, "Battles"),
                React.createElement("div", { className: "instructions" },
                    React.createElement("p", null, "If you enter the tall grass,    wild Mockmon may attack you! Be careful to keep your player in good health  before entering the grass."),
                    React.createElement("img", { src: './images/tall_grass_screenshot.png', alt: "Tall Grass" }),
                    React.createElement("p", null, "Move around in the tall grass until you find a Mockmon."))))));
}
// EXPORTS
module.exports = instructions;
