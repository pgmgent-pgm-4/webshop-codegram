'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Profile.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    dob: DataTypes.DATE,
    img_url: DataTypes.STRING,
    subscription: DataTypes.STRING,
    recent_activity: DataTypes.STRING,
    user_id: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};