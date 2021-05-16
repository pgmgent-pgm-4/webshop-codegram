'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Newsletter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Newsletter.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    user_id: DataTypes.STRING,
    date_since_sub: DataTypes.DATE, // Keep? Since createdAt and updatedAt are created in every table
    content: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Newsletter',
  });
  return Newsletter;
};