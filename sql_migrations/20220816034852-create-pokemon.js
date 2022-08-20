'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pokemon', {
      pokemon_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        allowNull: false,
        type: Sequelize.STRING
      },
      level: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      species_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      type_1_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      type_2_id: {
        type: Sequelize.INTEGER
      },
      ability_id: {
        type: Sequelize.INTEGER
      },
      hitpoints: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      defense: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      player_pokemon_id: {
        type: Sequelize.INTEGER
      },
      move_1_id: {
        type: Sequelize.INTEGER
      },
      move_2_id: {
        type: Sequelize.INTEGER
      },
      move_3_id: {
        type: Sequelize.INTEGER
      },
      move_4_id: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pokemon');
  }
};