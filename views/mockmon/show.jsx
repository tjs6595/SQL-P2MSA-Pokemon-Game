const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>Show Page</h1>
            <div>
                <h3><a href={`/mockmon/${data.pokemon.id}`}>
                    {data.pokemon.species}
                </a></h3>
                <img src={data.pokemon.image} alt={data.pokemon.name}></img>
                <img src={data.pokemon.sprite} alt={data.pokemon.sprite}></img>
            </div>
            <div>
                <p>Lv. {data.pokemon.level}</p>
                <ul>Type(s): 
                <li>{data.pokemon.type_1}</li> 
                <li>{data.pokemon.type_2}</li></ul>
                <p>Ability: {data.pokemon.ability}</p>
                <p>Entry: {data.pokemon.dex_entry}</p>
                <p>Hit Points: {data.pokemon.hit_points}</p>
                <p>Defense: {data.pokemon.defense}</p>
                <ul>Move(s)
                    <li>{data.pokemon.move_1}</li>
                    <li>{data.pokemon.move_2}</li>
                    <li>{data.pokemon.move_3}</li>
                    <li>{data.pokemon.move_4}</li>
                </ul>
            </div>

            {/* BUTTONS */}
                <div>
                    {/* EDIT BUTTON */}

                    <a href={`/mockmon/${data.pokemon.id}/edit`} className='btn btn-warning'>
                        Edit
                    </a>

                    {/* DELETE BUTTON */}
                    <form method='POST' action={`/mockmon/${data.pokemon.id}?_method=DELETE`}>
                        <button type='submit' className='btn btn-danger'>
                            Delete
                        </button>
                    </form>
                </div>

          </main>
        </Def>
    )
}

module.exports = show
