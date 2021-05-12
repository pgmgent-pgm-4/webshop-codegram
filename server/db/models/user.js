'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    email_verification: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    last_login: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};