// DEPENDENCIES
const React = require('react');
const Def = require('./default');

function instructions(){
    return (
        <Def>
            <main>
                <h1>INSTRUCTIONS</h1>
                <div>
                    <h4>Controls</h4>
                    <div className="instructions">
                    <p>Player movement keys:
                        <ul>   
                            <li>A = left</li> 
                            <li>W = up</li>
                            <li>S = down</li>
                            <li>D = right</li> 
                        </ul>
                        <img src='views/img/tall_grass_instruct.jpeg' width='250' height='250' alt='Tall Grass'/>
                        </p>
                        <p>
                            I may add some cropped screenshots or small gifs next to the controls
                            for more visuals? I'll add more control when I see the other button options.
                        </p>
                    </div>
                    <h4>Battles</h4>
                    <div className="instructions">
                        <p>If you enter the tall grass, wild sprites may attack you!
                            Be careful to keep your player in good health before entering the grass.
                            (and then more info depending on what functions there are for battles)
                        </p>
                    </div>

                </div>
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = instructions