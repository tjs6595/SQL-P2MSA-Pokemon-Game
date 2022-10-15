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
            yield queryInterface.bulkInsert('moves', [
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
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.bulkDelete('moves', null, null, null, null, null, null, null, null, {});
        });
    }
};
