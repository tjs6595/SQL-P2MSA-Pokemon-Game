'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('moves', [
    {
      name: 'Tackle',
      type: 'Normal'
    },
    {
      name: 'String-Shot',
      type: 'Bug'
    },
    {
      name: 'Sand-Attack',
      type: 'Ground'
    },
    {
      name: 'Tail-Whip',
      type: 'Normal'
    },
    {
      name: 'Quick-Attack',
      type: 'Normal'
    },
    {
      name: 'Scratch',
      type: 'Normal'
    },
    {
      name: 'Growl',
      type: 'Normal'
    },
    {
      name: 'Peck',
      type: 'Flying'
    },
    {
      name: 'Leer',
      type: 'Normal'
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('moves', null, null, null, null, null, null, null, null, {});
  }
};
