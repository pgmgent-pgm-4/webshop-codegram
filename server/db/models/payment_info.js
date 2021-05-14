'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment_Info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Payment_Info.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    user_id: DataTypes.STRING,
    payment_id: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    card_number: DataTypes.INTEGER,
    cvv: DataTypes.INTEGER,
    expiration_date: DataTypes.DATE,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment_Info',
  });
  return Payment_Info;
};