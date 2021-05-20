import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Course extends Model {
		static associate(models) {
			this.belongsToMany(models.User, {
				through: 'UserCourse',
			});
      this.belongsTo(models.Category, {
        through: 'CourseHasCategory'
      });
      this.hasMany(models.CourseVideos);
      this.hasMany(models.Video);
		}
	}

	Course.init({
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true},
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
