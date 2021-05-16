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
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    user_id: DataTypes.STRING,
    payment_id: DataTypes.STRING,
    order_completed: DataTypes.BOOLEAN,
    total: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};