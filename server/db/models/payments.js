'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Payments.init({
    user_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Payments',
  });
  return Payments;
};