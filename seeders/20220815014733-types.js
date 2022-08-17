'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('types', [
      {name: 'Normal'},
      {name: 'Fire'},
      {name: 'Water'},
      {name: 'Grass'},
      {name: 'Flying'},
      {name: 'Bug'},
      {name: 'Electric'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('types', {});
  }
};
