'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('npc', [
    {name: 'Bug Catcher Ricky'},
    {name: 'School Kid Terrance'},
    {name: 'Gary'},
    ], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('npc', null, null, {});
  }
};
