import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Category extends Model {
		static associate(models) {
			this.belongsToMany(models.Course, {
				through: 'CourseCategory',
			});
		}
	}

	Category.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true},
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
	}, {
		sequelize,
		modelName: 'Category',
	});

	return Category;
};