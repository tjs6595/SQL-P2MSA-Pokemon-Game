// DEPENDENCIES
const React = require('react');
const Def = require('./default');

function home(){
    return (
        <Def>
            <main>
                <h1 style={{fontSize: '100px', fontWeight:'Bold', fontFamily: 'sans-serif', fontStyle:'italic'}}>Mockmon</h1>
                <img src={'./images/wormber-movement.gif'} alt="wormber" width="300" height="300"/>
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = home