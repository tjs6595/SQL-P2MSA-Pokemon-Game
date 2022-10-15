'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkInsert('abilities', [
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
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkDelete('abilities', null, null, null, null, {});
        });
    }
};
