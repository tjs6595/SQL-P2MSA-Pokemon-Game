'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('abilities', [
      { 
        name: 'Torrent',
        description: "When HP is below 1/3rd, Water’s power increases to 1.5 times."
      },
      { 
        name: 'Blaze',
        description: "When HP is below 1/3rd, Fire’s power increases to 1.5 times."
      },
      { 
        name: 'Keen Eye',
        description: "Opponent cannot lower this Pokémon’s accuracy."
      },
      { 
        name: 'Shield Dust',
        description: ""
      },
      { 
        name: 'Run Away',
        description: "Except for trainer battles, can always run from battle. Cannot run during Mean Look or Block or when the opponent is trapping with the Arena Trap, Magnet Pull, or Shadow Tag ability."
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('abilities', null, null, null, null, {});
  }
};
