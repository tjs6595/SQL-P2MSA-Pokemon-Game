// require models folder
const db = require('../mongo_models/index.js')

// hardcoded data for seeding
db.Pokemon.create([
    {
        nickname: 'Pokemon 1',
        image: '',
        level: 3,
        species: 'Caterpie',
        type_1: 'Bug',
        type_2: undefined,
        ability: 'Shield Dust',
        hit_points: 8,
        defense: 8,
        player: '',
        move_1: 'Tackle',
        move_2: 'String Shot',
        Move_3: '',
        Move_4: ''        
    },
    {
        nickname: 'Pokemon 2',
        image: '',
        level: 4,
        species: 'Pidgey',
        type_1: 'Normal',
        type_2: 'Flying',
        ability: 'Keen Eye',
        hit_points: 9,
        defense: 9,
        player: '',
        move_1: 'Tackle',
        move_2: undefined,
        Move_3: '',
        Move_4: ''    
    },
    {
        nickname: 'Pokemon 3',
        image: '',
        level: 5,
        species: 'Pidgey',
        type_1: 'Normal',
        type_2: 'Flying',
        ability: 'Keen Eye',
        hit_points: 11,
        defense: 11,
        player: '',
        move_1: 'Tackle',
        move_2: 'Sand Attack',
        Move_3: '',
        Move_4: ''    
    },
    {
        nickname: 'Pokemon 4',
        image: '',
        level: 4,
        species: 'Rattata',
        type_1: 'Normal',
        type_2: undefined,
        ability: 'Run Away',
        hit_points: 8,
        defense: 8,
        player: '',
        move_1: 'Tackle',
        move_2: 'Tail Whip',
        Move_3: 'Quick Attack',
        Move_4: ''    
    },
    {
        nickname: 'Pokemon 5',
        image: '',
        level: 5,
        species: 'Charmander',
        type_1: 'Fire',
        type_2: undefined,
        ability: 'Blaze',
        hit_points: 12,
        defense: 12,
        player: '',
        move_1: 'Scratch',
        move_2: 'Growl',
        Move_3: '',
        Move_4: ''    
    },
    {
        nickname: 'Pokemon 6',
        image: '',
        level: 6,
        species: 'Spearow',
        type_1: 'Normal',
        type_2: 'Flying',
        ability: 'Keen Eye',
        hit_points: 10,
        defense: 10,
        player: '',
        move_1: 'Peck',
        move_2: 'Growl',
        Move_3: 'Leer',
        Move_4: ''    
    },
    {
        nickname: 'Pokemon 7',
        image: '',
        level: 3,
        species: 'Spearow',
        type_1: 'Normal',
        type_2: 'Flying',
        ability: 'Keen Eye',
        hit_points: 6,
        defense: 6,
        player: '',
        move_1: 'Peck',
        move_2: 'Growl',
        Move_3: '',
        Move_4: ''    
    },
    {
        nickname: 'Pokemon 8',
        image: '',
        level: 5,
        species: 'Squirtle',
        type_1: 'Water',
        type_2: undefined,
        ability: 'Torrent',
        hit_points: 12,
        defense: 12,
        player: '',
        move_1: 'Tackle',
        move_2: 'Tail Whip',
        Move_3: '',
        Move_4: ''    
    },
    {
        nickname: 'Pokemon 9',
        image: '',
        level: 3,
        species: 'Rattata',
        type_1: 'Normal',
        type_2: undefined,
        ability: 'Run Away',
        hit_points: 7,
        defense: 7,
        player: '',
        move_1: 'Tackle',
        move_2: 'Tail Whip',
        Move_3: '',
        Move_4: ''    
    },
    {
        nickname: 'Pokemon 10',
        image: '',
        level: 4,
        species: 'Caterpie',
        type_1: 'Bug',
        type_2: undefined,
        ability: 'Shield Dust',
        hit_points: 9,
        defense: 9,
        player: '',
        move_1: 'Tackle',
        move_2: 'String Shot',
        Move_3: '',
        Move_4: ''    
    }
])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})