'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class npc_pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  npc_pokemon.init({
    npc_pokemon_id: DataTypes.INTEGER,
    npc_id: DataTypes.INTEGER,
    pokemon_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'npc_pokemon',
  });
  return npc_pokemon;
};