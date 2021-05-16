'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Courses.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    unlocked: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    tags: DataTypes.STRING,
    lecturer: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    difficulty_level: DataTypes.INTEGER,
    certificate: DataTypes.BOOLEAN,
    language: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};