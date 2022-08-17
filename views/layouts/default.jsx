// default view for every page
// DEPENDENCIES
const React = require('react');

// stub function for HTML template
function Def(html){
    return (
        <html>
            <head>
                <title>Pokemon-Style Game</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

// exports
module.exports = Def