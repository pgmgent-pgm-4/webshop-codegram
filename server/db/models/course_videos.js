import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class CourseVideos extends Model {
		static associate(models) {
			this.belongsTo(models.Course);
		}
	}

	CourseVideos.init({
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true},
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
	}, {
		sequelize,
		modelName: 'CourseVideos',
	});

	return CourseVideos;
};