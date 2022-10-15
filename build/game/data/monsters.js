"use strict";
const monsters = {
    Puffig: {
        position: {
            x: 280,
            y: 325
        },
        image: {
            src: './img/pokeSpritePuffig.png'
        },
        frames: {
            max: 4,
            hold: 30
        },
        animate: true,
        name: 'Puffig',
        attacks: [attacks.Tackle, attacks.Fireball]
    },
    Wormber: {
        position: {
            x: 800,
            y: 100
        },
        image: {
            src: './img/pokeSpriteWormber.png'
        },
        frames: {
            max: 4,
            hold: 30
        },
        animate: true,
        isEnemy: true,
        name: 'Wormber',
        attacks: [attacks.Tackle, attacks.Fireball]
    }
};
