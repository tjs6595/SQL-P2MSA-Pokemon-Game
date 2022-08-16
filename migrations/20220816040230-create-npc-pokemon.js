'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('npc_pokemons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      npc_pokemon_id: {
        type: Sequelize.INTEGER
      },
      npc_id: {
        type: Sequelize.INTEGER
      },
      pokemon_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('npc_pokemons');
  }
};