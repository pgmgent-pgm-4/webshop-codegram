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
Get a specific course
*/
const getCourseById = async (req, res, next) => {
	try {
		// Get courseId parameter
		const { courseId } = req.params;
		// Get specific post from database
		const course = await database.Course.findAll({
			where: {
				id: courseId,
			},
		});
		// Send response
		res.status(200).json(course);
	} catch (error) {
		handleHTTPError(error, next);
	}
};

export {
	getCourseById,
	getCourses,
};
