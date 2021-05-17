import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class CourseVideos extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	CourseVideos.init({
    course_id: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'CourseVideos',
	});

	return CourseVideos;
};