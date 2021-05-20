import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Newsletter extends Model {
		static associate(models) {
			this.belongsToMany(models.User, {
				through: 'UserNewsletter',
			});
		}
	}

	Newsletter.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true},
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