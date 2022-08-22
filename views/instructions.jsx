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
                            <li>A = <i className="fa-solid fa-arrow-left"></i></li> 
                            <li>W = <i className="fa-solid fa-arrow-up"></i></li>
                            <li>S = <i className="fa-solid fa-arrow-down"></i></li>
                            <li>D = <i className="fa-solid fa-arrow-right"></i></li> 
                        </ul>
                        </p>
                    </div>
                    <h4>Battles</h4>
                    <div className="instructions">
                        <p>If you enter the tall grass,    wild Mockmon may attack you!
                            Be careful to keep your player in good health  before entering the grass.</p>
                            
                            <img src="views/img_instruction/tall_grass_screenshot.png" alt='Tall Grass'/>
                     
                        <p>
                            Move around in the tall grass until you find a Mockmon.
                        </p>
                            
                        
                    </div>

                </div>
            </main>
        </Def>
    )
}

// EXPORTS
module.exports = instructions