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
    user_id: DataTypes.INTEGER,
    unlocked: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    tags: DataTypes.BLOB,
    lecturer: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    difficulty_level: DataTypes.TEXT,
    certificate: DataTypes.BOOLEAN,
    language: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};