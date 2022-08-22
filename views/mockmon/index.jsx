// Pokemon Index Page
// THIS IS JUST A TEST!

// DEPENDENCIES
const React = require('react');
const Def = require('../default');

//stub function for index
//accepts data paramter from index
function index(data) {
    //formats data into HTML so page can display it
    let pokeFormatted = data.pokemon.map((pokemon) => {
        return (
            <div className='col-sm-3'>
                <h3><a href={`/mockmon/${pokemon.id}`}>
                    {pokemon.species}
                </a></h3>
                <img src={pokemon.image} alt={pokemon.name}></img>
                <img src={pokemon.sprite} alt={pokemon.sprite}></img>
            </div>
        )
    })

    return (
    // Wrapping in Def component
    <Def>
        <main>
            <h1>Mockdex</h1>  
            <div className='row'>
                {pokeFormatted}  
            </div>
                  
        </main>
    </Def>
    )
    
}

// exports index
module.exports = index;