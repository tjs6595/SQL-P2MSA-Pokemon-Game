// default view for every page
// DEPENDENCIES
const React = require('react');


// stub function for HTML template
function Def(html){
    return (
        <html>
            <head>
                <title>Mockmon</title>
                {/* Bootstrap CDN link */}
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
                
                {/* Main CSS */}
                <link rel='stylesheet' href='/css/style.css'/>
                <script src="https://use.fontawesome.com/cc7c57117a.js"></script>
                <script src="https://kit.fontawesome.com/c5973c0bc5.js" crossOrigin="anonymous"></script>
            </head>
            {/* NAVBAR */}
            <nav>
                {/* NAV LINKS */}
                <ul>
                    <li>
                        <a href='/'> <i className="fa fa-gamepad" aria-hidden="true"></i> Mockmon</a>
                    </li>
                    <li>
                        <a href='/instructions'><i className="fa fa-question-circle" aria-hidden="true"></i> Instructions</a>
                    </li>
                    <li>
                        <a href='/play'><i className="fa-solid fa-fire" aria-hidden="true"></i> Play</a>
                    </li>
                    <li>
                        <a href='/mockmon'><i className="fa-solid fa-dragon" aria-hidden="true"></i> Mockdex</a>
                    </li>
                    <li>
                        <a href='/mockmon/new'><i className="fa-regular fa-address-book" aria-hidden="true"></i> Add New Mockmon</a>
                    </li>
                </ul>
            </nav>
            <body>
                {html.children}
            </body>
            <footer>
                <p>Milestone Project 2: MERN Stack Application</p>
                <ul><b><u>Project Creators</u></b>
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