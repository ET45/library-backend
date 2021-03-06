'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  game.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    link: DataTypes.STRING,
    ghlink: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};