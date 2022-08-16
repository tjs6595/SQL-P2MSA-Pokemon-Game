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
        type: STRING
      },
      level: {
        allowNull: false,
        type: SMALLINT
      },
      species_id: {
        allowNull: false,
        type: INTEGER
      },
      type_1_id: {
        allowNull: false,
        type: INTEGER
      },
      type_2_id: {
        type: INTEGER
      },
      ability_id: {
        type: INTEGER
      },
      hitpoints: {
        allowNull: false,
        type: SMALLINT
      },
      defense: {
        allowNull: false,
        type: SMALLINT
      },
      player_pokemon_id: {
        type: INTEGER
      },
      move_1_id: {
        type: INTEGER
      },
      move_2_id: {
        type: INTEGER
      },
      move_3_id: {
        type: INTEGER
      },
      move_4_id: {
        type: INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pokemon');
  }
};