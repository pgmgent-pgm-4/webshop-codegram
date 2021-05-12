'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Product_Reviews.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    user_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    stars: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product_Reviews',
  });
  return Product_Reviews;
};