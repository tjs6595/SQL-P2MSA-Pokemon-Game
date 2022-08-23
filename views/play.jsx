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
                <p>Ready to play Mockmon?</p>
                <div>
                    <p>
                        Game Idea was made with Help by Chris Courses. Video can be found: <a href='https://www.youtube.com/watch?v=yP5DKzriqXA'>here.</a>
                    </p>
                    <p>
                        In no way are we taking credit for the game, game was used for educational purposes.
                        We will not profit or take credit for the game.
                    </p>
                    
                </div>
                <div dangerouslySetInnerHTML={{ __html: "<iframe src='http://localhost:8080/' />"}} />


            
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = play