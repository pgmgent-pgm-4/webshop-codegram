import { handleHTTPError } from '../../utils';
import database from '../../db/models';

/*
Get all users
*/
const getUsers = async (req, res, next) => {
	try {
		// Get users from database
		const users = await database.User.findAll();
		// Send response
		res.status(200).json(users);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Get a specific user
*/
const getUserById = async (req, res, next) => {
	try {
		// Get userId parameter
		const { userId } = req.params;
		// Get specific post from database
		const user = await database.User.findAll({
			where: {
				id: userId,
			},
		});
		// Send response
		res.status(200).json(user);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

export {
	getUserById,
	getUsers,
};
