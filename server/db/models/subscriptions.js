'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subscriptions.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    profile_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    price: DataTypes.INTEGER,
    subscription_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subscriptions',
  });
  return Subscriptions;
};