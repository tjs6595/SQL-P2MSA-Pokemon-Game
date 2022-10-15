'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class abilities extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    abilities.init({
        attribute_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        description: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'abilities',
    });
    return abilities;
};
