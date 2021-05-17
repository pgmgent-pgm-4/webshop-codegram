import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Course extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	Course.init({
    id: DataTypes.UUID,
    unlocked: DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    tags: DataTypes.STRING,
    lecturer: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    difficulty_level: DataTypes.INTEGER,
    certificate: DataTypes.BOOLEAN,
    language: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
	}, {
		sequelize,
		modelName: 'Course',
	});

	return Course;
};
