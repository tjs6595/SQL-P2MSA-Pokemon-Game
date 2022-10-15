"use strict";
// DEPENDENCIES
const React = require('react');
const Def = require('./default');
// https://stackoverflow.com/questions/38497334/how-to-run-html-file-on-localhost
// Instructions for hosting game locally. Make sure to use http://localhost:8080/ and 
// run the the command "http-server" inside of the game file in the terminal 
function play() {
    return (React.createElement(Def, null,
        React.createElement("main", null,
            React.createElement("p", null, "Ready to play Mockmon?"),
            React.createElement("div", null,
                React.createElement("p", null,
                    "Game Idea was made with Help by Chris Courses. Video can be found: ",
                    React.createElement("a", { href: 'https://www.youtube.com/watch?v=yP5DKzriqXA' }, "here.")),
                React.createElement("p", null, "In no way are we taking credit for the game, game was used for educational purposes. We will not profit or take credit for the game.")),
            React.createElement("div", { dangerouslySetInnerHTML: { __html: "<iframe src='https://malfell.github.io/Pokemon-Game-Alone/' />" } }))));
}
// EXPORTS
module.exports = play;
