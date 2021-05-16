import { handleHTTPError } from '../../utils';
import database from '../../db/models';

/*
Get all promotions
*/
const getPromotions = async (req, res, next) => {
	try {
		// Get promotions from database
		const promotions = await database.Promotion.findAll();
		// Send response
		res.status(200).json(promotions);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Get a specific promotion
*/
const getPromotionById = async (req, res, next) => {
	try {
		// Get promotionId parameter
		const { promotionId } = req.params;
		// Get specific post from database
		const promotion = await database.Promotion.findAll({
			where: {
				id: promotionId,
			},
		});
		// Send response
		res.status(200).json(promotion);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Create a promotion
*/
const createPromotion = async (req, res, next) => {
	try {
		// Get the promotion data from the request body
		const { promotion } = req.body;
		const now = new Date();
		// Add id and date strings
		const promotionToCreate = {
			id: uuidv4(),
			course_id: promotion.course_id,
			subscription_id: promotion.subscription_id,
			price_modifier: promotion.price_modifier,
			createdAt: now,
			updatedAt: now,
		};
		// Send response
		const response = await database.Promotion.create(promotionToCreate);
		if (response && response.message) {
			res.status(500).send(`Failed: ${response.message}`)
		} else {
			res.status(201).send(`Created promotion: ${JSON.stringify(promotion)}`)
		}
	} catch (error) {
		handleHTTPError(error, next);
	}
}

export {
	getPromotionById,
	getPromotions,
	createPromotion,
};
