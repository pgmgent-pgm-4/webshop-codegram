'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course_Has_Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Course_Has_Categories.init({
    category_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course_Has_Categories',
  });
  return Course_Has_Categories;
};