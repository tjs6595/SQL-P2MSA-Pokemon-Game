"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Error page
//import React and Def from default.jsx
const react_1 = __importDefault(require("react"));
const Def = require('./default');
//create error404 stub function
function error404() {
    return (
    // Using Def component as a wrapper
    react_1.default.createElement(Def, null,
        react_1.default.createElement("main", null,
            react_1.default.createElement("h1", null, "404: PAGE NOT FOUND"),
            react_1.default.createElement("p", { id: "errorPageText" }, "Sorry, you can't find Mockmon over here. :("))));
}
//export error404 function
module.exports = error404;
