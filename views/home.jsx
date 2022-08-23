// DEPENDENCIES
const React = require('react');
const Def = require('./default');

function home(){
    return (
        <Def>
            <main>
                <img src="https://placekitten.com/800/500" alt='Mockmon'/>
                <h1 style={{fontSize: '100px', fontWeight:'Bold', fontFamily: 'sans-serif'}}>Mockmon</h1>
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = home