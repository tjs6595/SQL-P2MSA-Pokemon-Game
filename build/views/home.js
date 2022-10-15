"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
const react_1 = __importDefault(require("react"));
const Def = require('./default');
function home() {
    return (react_1.default.createElement(Def, null,
        react_1.default.createElement("main", null,
            react_1.default.createElement("h1", { style: { fontSize: '100px', color: '#79a0c9', fontWeight: 'Bold', fontFamily: 'sans-serif', fontStyle: 'italic' } }, "Mockmon"),
            react_1.default.createElement("img", { src: './images/wormber-movement.gif', alt: "wormber", width: "300", height: "300" }))));
}
// EXPORTS
module.exports = home;
