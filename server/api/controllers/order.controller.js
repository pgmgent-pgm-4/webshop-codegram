import { handleHTTPError } from '../../utils';
import database from '../../db';

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

/*
Create a order
*/
const createOrder = async (req, res, next) => {
	try {
		// Get the order data from the request body
		const { order } = req.body;
		const now = new Date();
		// Add id and date strings
		const orderToCreate = {
			id: uuidv4(),
			user_id: order.user_id,
			payment_id: order.payment_id,
			order_completed: false,
			total: order.total,
/* 			createdAt: now,
			updatedAt: now, */
		};
		// Send response
		const response = await database.Order.create(orderToCreate);
		if (response && response.message) {
			res.status(500).send(`Failed: ${response.message}`)
		} else {
			res.status(201).send(`Created order: ${JSON.stringify(order)}`)
		}
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Update order
*/
const updateOrder = async (req, res, next) => {
	try {
		// Get the order data from the request body
		const { orderId } = req.params;
		const { order_completed, total, payment_id } = req.body;

		const response = await database.Order.update({ order_completed, total, payment_id }, { where: {
			id: orderId
		}});
		if (response && response.message) {
			res.status(500).send(`Failed: ${response.message}`)
		} else {
			res.status(200).send(`Updated order: ${id} | Complete: ${order_completed} - ${total}!`)
		}
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Delete order
*/
const deleteOrder = async (req, res, next) => {
	try {
		const { orderId } = req.params;
		const response = await database.Order.destroy({
			where: { id: orderId}
		});
		res.status(204).send(`Deleted order ${orderId}!`);
	} catch (err) {
		handleHTTPError(err, next);
	}
};

export {
	getOrderById,
	getOrders,
	createOrder,
	updateOrder,
	deleteOrder,
};
