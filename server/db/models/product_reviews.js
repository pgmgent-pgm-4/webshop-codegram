import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class ProductReviews extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	ProductReviews.init({
    user_id: DataTypes.STRING,
    course_id: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    review: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'ProductReviews',
	});

	return ProductReviews;
};
