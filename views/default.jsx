// default view for every page
// DEPENDENCIES
const React = require('react');


// stub function for HTML template
function Def(html){
    return (
        <html>
            <head>
                <title>Pokemon-Style Game</title>
                {/* Bootstrap CDN link */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                
                {/* Main CSS */}
                <link rel='stylesheet' href='/css/style.css'/>
                <script src="https://use.fontawesome.com/cc7c57117a.js"></script>
            </head>
            {/* NAVBAR */}
            <nav>
                {/* NAV LINKS */}
                <ul>
                    <li>
                        <a href='/'> <i className="fa fa-gamepad" aria-hidden="true"></i> PokeGame</a>
                    </li>
                    <li>
                        <a href='/instructions'><i className="fa fa-question-circle" aria-hidden="true"></i> Instructions</a>
                    </li>
                    <li>
                        <a href='/play'>Play</a>
                    </li>
                    <li>
                        <a href='/mockmon'>Mockdex</a>
                    </li>
                    <li>
                        <a href='/mockmon/new'>Add New Mockmon</a>
                    </li>
                </ul>
            </nav>
            <body>
                {html.children}
            </body>
            <footer>
                <p>Milestone Project 2: MERN Stack Application</p>
                <ul><b><u>Game Creators</u></b>
                    <li>Rebecca Coburn,</li> 
                    <li>Mallory Fellows, </li>
                    <li>Jarrod Helmers, and </li>
                    <li>Tim Schultejans</li>
                </ul>
            </footer>
        </html>
    )
}

// exports
module.exports = Def