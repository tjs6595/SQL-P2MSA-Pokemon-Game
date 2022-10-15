"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// default view for every page
// DEPENDENCIES
const react_1 = __importDefault(require("react"));
// stub function for HTML template
function Def(html) {
    return (react_1.default.createElement("html", null,
        react_1.default.createElement("head", null,
            react_1.default.createElement("title", null, "Mockmon"),
            react_1.default.createElement("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", crossOrigin: "anonymous" }),
            react_1.default.createElement("link", { rel: 'stylesheet', href: '/css/style.css' }),
            react_1.default.createElement("script", { src: "https://use.fontawesome.com/cc7c57117a.js" }),
            react_1.default.createElement("script", { src: "https://kit.fontawesome.com/c5973c0bc5.js", crossOrigin: "anonymous" })),
        react_1.default.createElement("nav", null,
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: '/' },
                        " ",
                        react_1.default.createElement("i", { className: "fa fa-gamepad", "aria-hidden": "true" }),
                        " Mockmon")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: '/instructions' },
                        react_1.default.createElement("i", { className: "fa fa-question-circle", "aria-hidden": "true" }),
                        " Instructions")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: '/play' },
                        react_1.default.createElement("i", { className: "fa-solid fa-fire", "aria-hidden": "true" }),
                        " Play")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: '/mockmon' },
                        react_1.default.createElement("i", { className: "fa-solid fa-dragon", "aria-hidden": "true" }),
                        " Mockdex")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: '/mockmon/new' },
                        react_1.default.createElement("i", { className: "fa-regular fa-address-book", "aria-hidden": "true" }),
                        " Add New Mockmon")))),
        react_1.default.createElement("body", null, html.children),
        react_1.default.createElement("footer", null,
            react_1.default.createElement("p", null, "Milestone Project 2: MERN Stack Application"),
            react_1.default.createElement("ul", null,
                react_1.default.createElement("b", null,
                    react_1.default.createElement("u", null, "Project Creators")),
                react_1.default.createElement("li", null, "Rebecca Coburn,"),
                react_1.default.createElement("li", null, "Mallory Fellows, "),
                react_1.default.createElement("li", null, "Jarrod Helmers, and "),
                react_1.default.createElement("li", null, "Tim Schultejans")))));
}
// exports
module.exports = Def;
