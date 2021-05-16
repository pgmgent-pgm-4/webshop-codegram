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

/*
Create a course
*/
const createCourse = async (req, res, next) => {
	try {
		// Get the course data from the request body
		const { course } = req.body;
		const now = new Date();
		// Add id and date strings
		const courseToCreate = {
			id: uuidv4(),
			unlocked: false,
			name: course.name,
			description: course.description,
			price: course.price,
			tags: course.tags,
			lecturer: course.lecturer,
			duration: course.duration,
			difficulty_level: course.difficulty_level,
			certificate: course.certificate,
			createdAt: now,
			updatedAt: now,
		};
		// Send response
		const response = await database.Course.create(courseToCreate);
		if (response && response.message) {
			res.status(500).send(`Failed: ${response.message}`)
		} else {
			res.status(201).send(`Created course: ${JSON.stringify(course)}`)
		}
	} catch (error) {
		handleHTTPError(error, next);
	}
}

export {
	getCourseById,
	getCourses,
	createCourse,
};
