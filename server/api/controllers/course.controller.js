import { handleHTTPError } from '../../utils';
import database from '../../db/models';

/*
Get all courses
*/
const getCourses = async (req, res, next) => {
	try {
		// Get courses from database
		const courses = await database.Course.findAll();
		// Send response
		res.status(200).json(courses);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Get a specific category
*/
const getCourseById = async (req, res, next) => {
	try {
		// Get categoryId parameter
		const { categoryId } = req.params;
		// Get specific post from database
		const category = await database.Course.findAll({
			where: {
				id: categoryId,
			},
		});
		// Send response
		res.status(200).json(category);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

export {
	getCourseById,
	getCourses,
};
