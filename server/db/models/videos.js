import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Video extends Model {
		static associate(models) {
			this.belongsTo(models.Course);
		}
	}

	Video.init({
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true
    },
    url: DataTypes.STRING,
    name: DataTypes.STRING,
    paused_at: DataTypes.INTEGER,
    duration: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
	}, {
		sequelize,
		modelName: 'Video',
	});

	return Video;
};