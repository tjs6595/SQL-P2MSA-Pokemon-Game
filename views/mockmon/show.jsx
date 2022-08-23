const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            {/* <h1>Show Page</h1> */}
            <div>
                <h3 style={{fontWeight:'Bold', fontSize: '75px'}}><a href={`/mockmon/${data.pokemon.id}`}>
                    {data.pokemon.species}
                </a></h3>
                <img src={data.pokemon.image} alt={data.pokemon.name}></img>
                <img src={data.pokemon.sprite} alt={data.pokemon.sprite}></img>
            </div>
            <div style={{display: 'inline-block', textAlign: 'center', backgroundColor: "#79a0c9", width:"300px"}}>
                <p><span style={{fontWeight:'Bold'}}>Lv. </span>{data.pokemon.level}</p>
                <ul><span style={{fontWeight:'Bold'}}>Type(s): </span>
                <li>{data.pokemon.type_1}</li> 
                <li>{data.pokemon.type_2}</li></ul>
                <p><span style={{fontWeight:'Bold'}}>Ability: </span>{data.pokemon.ability}</p>
                <p><span style={{fontWeight:'Bold'}}>Entry: </span>{data.pokemon.dex_entry}</p>
                <p><span style={{fontWeight:'Bold'}}>Hit Points: </span>{data.pokemon.hit_points}</p>
                <p><span style={{fontWeight:'Bold'}}>Defense: </span>{data.pokemon.defense}</p>
                <ul><span style={{fontWeight:'Bold'}}>Move(s)</span>
                    <li>{data.pokemon.move_1}</li>
                    <li>{data.pokemon.move_2}</li>
                    <li>{data.pokemon.move_3}</li>
                    <li>{data.pokemon.move_4}</li>
                </ul>
            </div>

            {/* BUTTONS */}
                <div>
                    <div style={{display: 'inline-flex'}}>
                    {/* EDIT BUTTON */}
                    <a href={`/mockmon/${data.pokemon.id}/edit`} className='btn btn-success btn-lg'>
                        Edit
                    </a>

                    {/* DELETE BUTTON */}
                    <form method='POST' action={`/mockmon/${data.pokemon.id}?_method=DELETE`}>
                        <button type='submit' className='btn btn-danger btn-lg'>
                            Delete
                        </button>
                    </form>
                    </div>
                </div>

          </main>
        </Def>
    )
}

module.exports = show
