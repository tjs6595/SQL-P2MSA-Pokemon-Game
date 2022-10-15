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
            yield queryInterface.bulkInsert('npc_pokemon', [
                {
                    npc_id: 1,
                    pokemon_id: 1
                },
                {
                    npc_id: 1,
                    pokemon_id: 10
                },
                {
                    npc_id: 2,
                    pokemon_id: 4
                },
                {
                    npc_id: 2,
                    pokemon_id: 2
                },
                {
                    npc_id: 3,
                    pokemon_id: 8
                },
            ], {});
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkDelete('npc_pokemon', null, null, null, null, {});
        });
    }
};
