import { handleHTTPError } from '../../utils';
import database from '../../db/models';

/*
Get all orders
*/
const getOrders = async (req, res, next) => {
	try {
		// Get orders from database
		const orders = await database.Order.findAll();
		// Send response
		res.status(200).json(orders);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Get a specific order
*/
const getOrderById = async (req, res, next) => {
	try {
		// Get orderId parameter
		const { orderId } = req.params;
		// Get specific post from database
		const order = await database.Order.findAll({
			where: {
				id: orderId,
			},
		});
		// Send response
		res.status(200).json(order);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

export {
	getOrderById,
	getOrders,
};
