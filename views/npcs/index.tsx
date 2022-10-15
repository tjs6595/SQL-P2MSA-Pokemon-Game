// Pokemon Index Page
// THIS IS JUST A TEST!

// DEPENDENCIES
import React = require('react');
const Def = require('../default');

//stub function for index
//accepts data paramter from index
function index(data: { npcs: any[]; }) {
    //formats data into HTML so page can display it
    let npcFormatted = data.npcs.map((npcs: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
        return (
            <div>
                    <h3>{npcs.name}</h3>
            </div>
        )
    })

    return (
    // Wrapping in Def component
    <Def>
        <main>
            <h1>NPC List</h1>  
            {npcFormatted}         
        </main>
    </Def>
    )
    
}

// exports index
module.exports = index;