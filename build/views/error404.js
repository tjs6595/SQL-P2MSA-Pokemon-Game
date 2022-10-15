"use strict";
// Error page
//import React and Def from default.jsx
const React = require('react');
const Def = require('./default');
//create error404 stub function
function error404() {
    return (
    // Using Def component as a wrapper
    React.createElement(Def, null,
        React.createElement("main", null,
            React.createElement("h1", null, "404: PAGE NOT FOUND"),
            React.createElement("p", { id: "errorPageText" }, "Sorry, you can't find Mockmon over here. :("))));
}
//export error404 function
module.exports = error404;
