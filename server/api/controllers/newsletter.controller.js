import { handleHTTPError } from '../../utils';
import database from '../../db/models/index.cjs';

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

/*
Create a newsletter
*/
const createNewsletter = async (req, res, next) => {
	try {
		// Get the newsletter data from the request body
		const { newsletter } = req.body;
		const now = new Date();
		// Add id and date strings
		const newsletterToCreate = {
			id: uuidv4(),
			user_id: newsletter.user_id,
			content: newsletter.content,
			createdAt: now,
			updatedAt: now,
		};
		// Send response
		const response = await database.Newsletter.create(newsletterToCreate);
		if (response && response.message) {
			res.status(500).send(`Failed: ${response.message}`)
		} else {
			res.status(201).send(`Created newsletter: ${JSON.stringify(newsletter)}`)
		}
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Update newsletter
*/
const updateNewsletter = async (req, res, next) => {
	try {
		// Get the newsletter data from the request body
		const { newsletterId } = req.params;
		const { name, description, price, tags, difficulty_level, certificate, duration, lecturer } = req.body;

		const response = await database.Newsletter.update({ name, description, price, tags, difficulty_level, certificate, duration, lecturer }, { where: {
			id: newsletterId
		}});
		if (response && response.message) {
			res.status(500).send(`Failed: ${response.message}`)
		} else {
			res.status(200).send(`Updated newsletter: ${name} - ${description} in ${newsletterId}`)
		}
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Delete newsletter
*/
const deleteNewsletter = async (req, res, next) => {
	try {
		const { newsletterId } = req.params;
		const response = await database.Newsletter.destroy({
			where: { id: newsletterId}
		});
		res.status(204).send(`Deleted newsletter with id ${newsletterId}!`);
	} catch (err) {
		handleHTTPError(err, next);
	}
};

export {
	getNewsletterById,
	getNewsletters,
	createNewsletter,
	updateNewsletter,
	deleteNewsletter,
};
