'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('npc_pokemon', [
    {
      npc_id: 1,
      pokemon_id: 1
    },
    {
      npc_id: 1,
      pokemon_id: 10
    },
    {
      npc_id: 2,
      pokemon_id: 4
    },
    {
      npc_id: 2,
      pokemon_id: 2
    },
    {
      npc_id: 3,
      pokemon_id: 8
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('npc_pokemon', null, null, null, null, {});
  }
};
