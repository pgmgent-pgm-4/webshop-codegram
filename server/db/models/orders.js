import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Order extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	Order.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true},
    user_id: DataTypes.STRING,
    payment_id: DataTypes.STRING,
    order_completed: DataTypes.BOOLEAN,
    total: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
	}, {
		sequelize,
		modelName: 'Order',
	});

	return Order;
};