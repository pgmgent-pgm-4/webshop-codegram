import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Promotion extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	Promotion.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true},
    course_id: DataTypes.STRING,
    subscription_id: DataTypes.STRING,
    price_modifier: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
	}, {
		sequelize,
		modelName: 'Promotion',
	});

	return Promotion;
};
