'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pokemon', [
      {
        level: 3,
        nickname: '',
        species_id: 1,
        type_1_id: 1,
        type_2_id: 4,
        ability_id: 1,
        level: 1,
        hitpoints: 8,
        defense: 1,
        player_pokemon_id: 1,
        move_1_id: 1,
        move_2_id: 1,
        move_3_id: null,
        move_4_id: null
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pokemon', null, null, null, null, null, null, null, null, null, null, null, null, {});
  }
};
