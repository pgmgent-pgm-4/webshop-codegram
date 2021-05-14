import { handleHTTPError } from '../../utils';
import database from '../../db/models';

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

export {
	getPaymentById,
	getPayments,
};
