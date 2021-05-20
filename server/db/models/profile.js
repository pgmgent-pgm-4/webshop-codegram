import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Profile extends Model {
		static associate(models) {
			this.belongsTo(models.User);
			this.hasMany(models.Order)
		}
	}

	Profile.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true},
    dob: DataTypes.DATE,
    img_url: DataTypes.STRING,
    subscription: DataTypes.STRING,
    recent_activity: DataTypes.STRING,
    user_id: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
	}, {
		sequelize,
		modelName: 'Profile',
	});

	return Profile;
};
