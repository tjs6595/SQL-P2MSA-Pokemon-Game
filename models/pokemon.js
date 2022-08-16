'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pokemon.init({
    pokemon_id: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    level: DataTypes.SMALLINT,
    species_id: DataTypes.INTEGER,
    type_1_id: DataTypes.INTEGER,
    type_2_id: DataTypes.INTEGER,
    ability_id: DataTypes.INTEGER,
    hitpoints: DataTypes.SMALLINT,
    defense: DataTypes.SMALLINT,
    player_pokemon_id: DataTypes.INTEGER,
    move_1_id: DataTypes.INTEGER,
    move_2_id: DataTypes.INTEGER,
    move_3_id: DataTypes.INTEGER,
    move_4_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pokemon',
  });
  return pokemon;
};