import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Newsletter extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	Newsletter.init({
    user_id: DataTypes.STRING,
    date_since_sub: DataTypes.DATE, // Keep? Since createdAt and updatedAt are created in every table
    content: DataTypes.TEXT,
	}, {
		sequelize,
		modelName: 'Newsletter',
	});

	return Newsletter;
};