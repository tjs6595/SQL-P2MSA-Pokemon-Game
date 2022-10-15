'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkInsert('pokemon', [
                {
                    nickname: 'Pokemon 1',
                    level: 3,
                    species_id: 1,
                    type_1_id: 6,
                    type_2_id: null,
                    ability_id: 4,
                    hitpoints: 8,
                    defense: 8,
                    player_pokemon_id: null,
                    move_1_id: 1,
                    move_2_id: 2,
                    move_3_id: null,
                    move_4_id: null
                },
                {
                    nickname: 'Pokemon 2',
                    level: 4,
                    species_id: 2,
                    type_1_id: 1,
                    type_2_id: 5,
                    ability_id: 3,
                    hitpoints: 9,
                    defense: 9,
                    player_pokemon_id: null,
                    move_1_id: 1,
                    move_2_id: null,
                    move_3_id: null,
                    move_4_id: null
                },
                {
                    nickname: 'Pokemon 3',
                    level: 5,
                    species_id: 2,
                    type_1_id: 1,
                    type_2_id: 5,
                    ability_id: 3,
                    hitpoints: 11,
                    defense: 11,
                    player_pokemon_id: null,
                    move_1_id: 1,
                    move_2_id: 3,
                    move_3_id: null,
                    move_4_id: null
                },
                {
                    nickname: 'Pokemon 4',
                    level: 4,
                    species_id: 3,
                    type_1_id: 1,
                    type_2_id: null,
                    ability_id: 5,
                    hitpoints: 8,
                    defense: 8,
                    player_pokemon_id: null,
                    move_1_id: 1,
                    move_2_id: 4,
                    move_3_id: 5,
                    move_4_id: null
                },
                {
                    nickname: 'Pokemon 5',
                    level: 5,
                    species_id: 4,
                    type_1_id: 2,
                    type_2_id: null,
                    ability_id: 2,
                    hitpoints: 8,
                    defense: 8,
                    player_pokemon_id: null,
                    move_1_id: 6,
                    move_2_id: 7,
                    move_3_id: null,
                    move_4_id: null
                },
                {
                    nickname: 'Pokemon 6',
                    level: 6,
                    species_id: 5,
                    type_1_id: 1,
                    type_2_id: 5,
                    ability_id: 3,
                    hitpoints: 10,
                    defense: 10,
                    player_pokemon_id: null,
                    move_1_id: 8,
                    move_2_id: 7,
                    move_3_id: 9,
                    move_4_id: null
                },
                {
                    nickname: 'Pokemon 7',
                    level: 3,
                    species_id: 5,
                    type_1_id: 1,
                    type_2_id: 5,
                    ability_id: 3,
                    hitpoints: 6,
                    defense: 6,
                    player_pokemon_id: null,
                    move_1_id: 8,
                    move_2_id: 7,
                    move_3_id: null,
                    move_4_id: null
                },
                {
                    nickname: 'Pokemon 8',
                    level: 5,
                    species_id: 6,
                    type_1_id: 3,
                    type_2_id: null,
                    ability_id: 1,
                    hitpoints: 12,
                    defense: 12,
                    player_pokemon_id: null,
                    move_1_id: 1,
                    move_2_id: 4,
                    move_3_id: null,
                    move_4_id: null
                },
                {
                    nickname: 'Pokemon 9',
                    level: 3,
                    species_id: 3,
                    type_1_id: 1,
                    type_2_id: null,
                    ability_id: 5,
                    hitpoints: 7,
                    defense: 7,
                    player_pokemon_id: null,
                    move_1_id: 1,
                    move_2_id: 4,
                    move_3_id: null,
                    move_4_id: null
                },
                {
                    nickname: 'Pokemon 10',
                    level: 4,
                    species_id: 1,
                    type_1_id: 6,
                    type_2_id: null,
                    ability_id: 4,
                    hitpoints: 9,
                    defense: 9,
                    player_pokemon_id: null,
                    move_1_id: 1,
                    move_2_id: 2,
                    move_3_id: null,
                    move_4_id: null
                },
            ], {});
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkDelete('pokemon', null, null, null, null, null, null, null, null, null, null, null, null, {});
        });
    }
};
