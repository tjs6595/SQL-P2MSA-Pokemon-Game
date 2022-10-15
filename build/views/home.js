"use strict";
// DEPENDENCIES
const React = require('react');
const Def = require('./default');
function home() {
    return (React.createElement(Def, null,
        React.createElement("main", null,
            React.createElement("h1", { style: { fontSize: '100px', color: '#79a0c9', fontWeight: 'Bold', fontFamily: 'sans-serif', fontStyle: 'italic' } }, "Mockmon"),
            React.createElement("img", { src: './images/wormber-movement.gif', alt: "wormber", width: "300", height: "300" }))));
}
// EXPORTS
module.exports = home;
