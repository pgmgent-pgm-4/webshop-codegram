'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Orders.init({
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    payments_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    total: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};