'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promotions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Promotions.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    course_id: DataTypes.STRING,
    subscription_id: DataTypes.STRING,
    price_modifier: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Promotions',
  });
  return Promotions;
};