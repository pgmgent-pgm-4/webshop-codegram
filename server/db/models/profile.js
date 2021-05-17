import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Profile extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	Profile.init({
    dob: DataTypes.DATE,
    img_url: DataTypes.STRING,
    subscription: DataTypes.STRING,
    recent_activity: DataTypes.STRING,
    user_id: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'Profile',
	});

	return Profile;
};
