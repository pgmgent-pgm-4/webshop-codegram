import { handleHTTPError } from '../../utils';
import database from '../../db/models/index.cjs';

/*
Get all subscriptions
*/
const getSubscriptions = async (req, res, next) => {
	try {
		// Get subscriptions from database
		const subscriptions = await database.Subscription.findAll();
		// Send response
		res.status(200).json(subscriptions);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Get a specific subscription
*/
const getSubscriptionById = async (req, res, next) => {
	try {
		// Get subscriptionId parameter
		const { subscriptionId } = req.params;
		// Get specific post from database
		const subscription = await database.Subscription.findAll({
			where: {
				id: subscriptionId,
			},
		});
		// Send response
		res.status(200).json(subscription);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Create a subscription
*/
const createSubscription = async (req, res, next) => {
	try {
		// Get the subscription data from the request body
		const { subscription } = req.body;
		const now = new Date();
		// Add id and date strings
		const subscriptionToCreate = {
			id: uuidv4(),
			profile_id: subscription.profile_id,
      start_date: subscription.start_date,
      end_date: subscription.end_date,
      price: subscription.price,
      subscription_type: subscription.subscription_type,
			createdAt: now,
			updatedAt: now,
		};
		// Send response
		const response = await database.Subscription.create(subscriptionToCreate);
		if (response && response.message) {
			res.status(500).send(`Failed: ${response.message}`)
		} else {
			res.status(201).send(`Created subscription: ${JSON.stringify(subscription)}`)
		}
	} catch (error) {
		handleHTTPError(error, next);
	}
}

export {
	getSubscriptionById,
	getSubscriptions,
	createSubscription,
};
