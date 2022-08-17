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
                    <div class="instructions">
                        <p>Press AWSD keys to move the player.
                            I may add some cropped screenshots or small gifs next to the controls
                            for more visuals? I'll add more control when I see the other button options.
                        </p>
                    </div>
                    <h4>Battles</h4>
                    <div class="instructions">
                        <p>If you enter the tall grass, wild Pokemon may attack you!
                            Be careful to keep your Pokemon in good health before entering the grass.
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