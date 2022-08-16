'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class player_pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  player_pokemon.init({
    player_pokemon_id: DataTypes.INTEGER,
    player_id: DataTypes.INTEGER,
    pokemon_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'player_pokemon',
  });
  return player_pokemon;
};