'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('player_pokemon', [
    {
      player_id: 1,
      pokemon_id: 5
    },
    {
      player_id: 1,
      pokemon_id: 6
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('player_pokemon', null, {});
  }
};
