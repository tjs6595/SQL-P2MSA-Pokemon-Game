"use strict";
// default view for every page
// DEPENDENCIES
const React = require('react');
// stub function for HTML template
function Def(html) {
    return (React.createElement("html", null,
        React.createElement("head", null,
            React.createElement("title", null, "Mockmon"),
            React.createElement("link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css", integrity: "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3", crossOrigin: "anonymous" }),
            React.createElement("link", { rel: 'stylesheet', href: '/css/style.css' }),
            React.createElement("script", { src: "https://use.fontawesome.com/cc7c57117a.js" }),
            React.createElement("script", { src: "https://kit.fontawesome.com/c5973c0bc5.js", crossOrigin: "anonymous" })),
        React.createElement("nav", null,
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", { href: '/' },
                        " ",
                        React.createElement("i", { className: "fa fa-gamepad", "aria-hidden": "true" }),
                        " Mockmon")),
                React.createElement("li", null,
                    React.createElement("a", { href: '/instructions' },
                        React.createElement("i", { className: "fa fa-question-circle", "aria-hidden": "true" }),
                        " Instructions")),
                React.createElement("li", null,
                    React.createElement("a", { href: '/play' },
                        React.createElement("i", { className: "fa-solid fa-fire", "aria-hidden": "true" }),
                        " Play")),
                React.createElement("li", null,
                    React.createElement("a", { href: '/mockmon' },
                        React.createElement("i", { className: "fa-solid fa-dragon", "aria-hidden": "true" }),
                        " Mockdex")),
                React.createElement("li", null,
                    React.createElement("a", { href: '/mockmon/new' },
                        React.createElement("i", { className: "fa-regular fa-address-book", "aria-hidden": "true" }),
                        " Add New Mockmon")))),
        React.createElement("body", null, html.children),
        React.createElement("footer", null,
            React.createElement("p", null, "Milestone Project 2: MERN Stack Application"),
            React.createElement("ul", null,
                React.createElement("b", null,
                    React.createElement("u", null, "Project Creators")),
                React.createElement("li", null, "Rebecca Coburn,"),
                React.createElement("li", null, "Mallory Fellows, "),
                React.createElement("li", null, "Jarrod Helmers, and "),
                React.createElement("li", null, "Tim Schultejans")))));
}
// exports
module.exports = Def;
