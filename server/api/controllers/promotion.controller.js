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

export {
	getPromotionById,
	getPromotions,
};
