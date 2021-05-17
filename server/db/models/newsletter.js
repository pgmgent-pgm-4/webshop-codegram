import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Newsletter extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	Newsletter.init({
    id: DataTypes.UUID,
    user_id: DataTypes.STRING,
    date_since_sub: DataTypes.DATE, // Keep? Since createdAt and updatedAt are created in every table
    content: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
	}, {
		sequelize,
		modelName: 'Newsletter',
	});

	return Newsletter;
};