import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Order extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	Order.init({
    user_id: DataTypes.STRING,
    payment_id: DataTypes.STRING,
    order_completed: DataTypes.BOOLEAN,
    total: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'Order',
	});

	return Order;
};