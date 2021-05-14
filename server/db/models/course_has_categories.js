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
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    category_id: DataTypes.STRING,
    course_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Course_Has_Categories',
  });
  return Course_Has_Categories;
};