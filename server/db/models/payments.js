import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Payment extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	Payment.init({
    user_id: DataTypes.STRING,
    order_id: DataTypes.STRING,
    total: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'Payment',
	});

	return Payment;
};