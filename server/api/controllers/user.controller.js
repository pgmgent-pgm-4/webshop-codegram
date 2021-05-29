import { handleHTTPError } from '../../utils';
import database from '../../db';

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
		const user = await database.User.findOne({
			where: {
				id: userId,
			}
		});
		// Send response
		res.status(200).json(user);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Create a user
*/
const createUser = async (req, res, next) => {
	try {
		// Get the user data from the request body
		const { user } = req.body;
		const now = new Date();
		// Add id and date strings
		const userToCreate = {
			id: uuidv4(),
			username: user.username,
			email: user.email,
			email_verified: user.email_verified,
			password: user.password,
			role: user.role,
			last_login: user.last_login,
		};
		// Send response
		const response = await database.User.create(userToCreate);
		if (response && response.message) {
			res.status(500).send(`Failed: ${response.message}`)
		} else {
			res.status(201).send(`Created user: ${JSON.stringify(user)}`)
		}
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Update user
*/
const updateUser = async (req, res, next) => {
	try {
		// Get the user data from the request body
		const { userId } = req.params;
		const { username, email, password } = req.body;

		const response = await database.User.update({ username, email, password }, { where: {
			id: userId
		}});
		if (response && response.message) {
			res.status(500).send(`Failed: ${response.message}`)
		} else {
			res.status(200).send(`Updated user: ${id} | ${req.body}`)
		}
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Update user by admin
*/
const updateUserByAdmin = async (req, res, next) => {
	try {
		// Get the user data from the request body
		const { userId } = req.params;
		const { username, email, email_verified, role, password, last_login } = req.body;

		const response = await database.User.update({ username, email, password, email_verified, last_login, role }, { where: {
			id: userId
		}});
		if (response && response.message) {
			res.status(500).send(`Failed: ${response.message}`)
		} else {
			res.status(200).send(`Updated user: ${id} | ${req.body}`)
		}
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Delete user
*/
const deleteUser = async (req, res, next) => {
	try {
		const { userId } = req.params;
		const response = await database.User.destroy({
			where: { id: userId}
		});
		res.status(204).send(`Deleted user ${userId}!`);
	} catch (err) {
		handleHTTPError(err, next);
	}
};

export {
	getUserById,
	getUsers,
	createUser,
	updateUser,
	updateUserByAdmin,
	deleteUser,
};
