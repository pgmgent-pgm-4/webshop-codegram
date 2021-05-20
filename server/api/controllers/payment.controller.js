import { handleHTTPError } from '../../utils';
import database from '../../db/models/index.cjs';

/*
Get all payments
*/
const getPayments = async (req, res, next) => {
	try {
		// Get payments from database
		const payments = await database.Payment.findAll();
		// Send response
		res.status(200).json(payments);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Get a specific payment
*/
const getPaymentById = async (req, res, next) => {
	try {
		// Get paymentId parameter
		const { paymentId } = req.params;
		// Get specific post from database
		const payment = await database.Payment.findAll({
			where: {
				id: paymentId,
			},
		});
		// Send response
		res.status(200).json(payment);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Create a payment
*/
const createPayment = async (req, res, next) => {
	try {
		// Get the payment data from the request body
		const { payment } = req.body;
		const now = new Date();
		// Add id and date strings
		const paymentToCreate = {
			id: uuidv4(),
			user_id: payment.user_id,
			order_id: payment.order_id,
			total: payment.total,
			createdAt: now,
			updatedAt: now,
		};
		// Send response
		const response = await database.Payment.create(paymentToCreate);
		if (response && response.message) {
			res.status(500).send(`Failed: ${response.message}`)
		} else {
			res.status(201).send(`Created payment: ${JSON.stringify(payment)}`)
		}
	} catch (error) {
		handleHTTPError(error, next);
	}
}

export {
	getPaymentById,
	getPayments,
	createPayment,
};
