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
            yield queryInterface.createTable('pokemon', {
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
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable('pokemon');
        });
    }
};
