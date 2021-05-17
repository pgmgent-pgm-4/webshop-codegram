import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Payment extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	Payment.init({
    id: DataTypes.UUID,
    user_id: DataTypes.STRING,
    order_id: DataTypes.STRING,
    total: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
	}, {
		sequelize,
		modelName: 'Payment',
	});

	return Payment;
};