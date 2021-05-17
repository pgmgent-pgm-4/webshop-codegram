import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class User extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true},
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    email_verified: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    last_login: DataTypes.DATE,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
	}, {
		sequelize,
		modelName: 'User',
	});

	return User;
};