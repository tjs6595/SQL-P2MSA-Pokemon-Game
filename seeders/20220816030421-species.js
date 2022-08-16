'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('species', [
      {name: 'Caterpie'},
      {name: 'Pidgey'},
      {name: 'Rattata'},
      {name: 'Charmander'},
      {name: 'Spearow'},
      {name: 'Squirtle'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('species', {});
  }
};
