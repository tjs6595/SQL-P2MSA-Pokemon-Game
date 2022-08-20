'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('players', [
    {name: 'Luis'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('players', null, {});
  }
};