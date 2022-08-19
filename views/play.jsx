// DEPENDENCIES
const React = require('react');
const Def = require('./default');

// https://stackoverflow.com/questions/38497334/how-to-run-html-file-on-localhost
// Instructions for hosting game locally. Make sure to use http://localhost:8080/ and 
// run the the command "http-server" inside of the game file in the terminal 

function play(){
    return (
        <Def>
            <main>
                <p>Game window goes here?</p>
                <div dangerouslySetInnerHTML={{ __html: "<iframe src='http://localhost:8080/' />"}} />
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = play