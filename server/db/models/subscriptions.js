import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
	class Subscription extends Model {
		static associate(models) {
			this.hasMany(models.Product);
		}
	}

	Subscription.init({
    id: DataTypes.UUID,
    profile_id: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    price: DataTypes.INTEGER,
    subscription_type: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
	}, {
		sequelize,
		modelName: 'Subscription',
	});

	return Subscription;
};