'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class moves extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    moves.init({
        move_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        type: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'moves',
    });
    return moves;
};
