import { handleHTTPError } from '../../utils';
import database from '../../db/models';

/*
Get all categories
*/
const getNewsletters = async (req, res, next) => {
	try {
		// Get categories from database
		const categories = await database.Newsletter.findAll();
		// Send response
		res.status(200).json(categories);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Get a specific newsletter
*/
const getNewsletterById = async (req, res, next) => {
	try {
		// Get newsletterId parameter
		const { newsletterId } = req.params;
		// Get specific post from database
		const newsletter = await database.Newsletter.findAll({
			where: {
				id: newsletterId,
			},
		});
		// Send response
		res.status(200).json(newsletter);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

export {
	getNewsletterById,
	getNewsletters,
};
