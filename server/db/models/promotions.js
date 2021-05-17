import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Promotion extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	Promotion.init({
    course_id: DataTypes.STRING,
    subscription_id: DataTypes.STRING,
    price_modifier: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'Promotion',
	});

	return Promotion;
};
