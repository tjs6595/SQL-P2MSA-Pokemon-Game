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
            <div>
                <div>
                    <h3>{pokemon.nickname}</h3>
                    <h4>{pokemon.species}</h4>
                    <p>Lv. {pokemon.level}</p>
                    <ul>Type(s): 
                    <li>{pokemon.type_1}</li> 
                    <li>{pokemon.type_2}</li></ul>
                    <p>Ability: {pokemon.ability}</p>
                    <p>Hit Points: {pokemon.hit_points}</p>
                    <p>Defense: {pokemon.defense}</p>
                    <ul>Move(s)
                        <li>{pokemon.move_1}</li>
                        <li>{pokemon.move_2}</li>
                        <li>{pokemon.Move_3}</li>
                        <li>{pokemon.Move_4}</li>
                    </ul>
                </div>
            </div>
        )
    })

    return (
    // Wrapping in Def component
    <Def>
        <main>
            <h1>Pokemon List</h1>  
            {pokeFormatted}        
        </main>
    </Def>
    )
    
}

// exports index
module.exports = index;