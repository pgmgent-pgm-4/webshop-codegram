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
};

/*
Update course
*/
const updateCourse = async (req, res, next) => {
	try {
		// Get the course data from the request body
		const { courseId } = req.params;
		const { name, description, price, tags, difficulty_level, certificate, duration, lecturer } = req.body;

		const response = await database.Course.update({ name, description, price, tags, difficulty_level, certificate, duration, lecturer }, { where: {
			id: courseId
		}});
		if (response && response.message) {
			res.status(500).send(`Failed: ${response.message}`)
		} else {
			res.status(200).send(`Updated course: ${name} - ${description} in ${courseId}`)
		}
	} catch (error) {
		handleHTTPError(error, next);
	}
};

/*
Delete course
*/
const deleteCourse = async (req, res, next) => {
	try {
		const { courseId } = req.params;
		const response = await database.Course.destroy({
			where: { id: courseId}
		});
		res.status(204).send(`Deleted course with id ${courseId}!`);
	} catch (err) {
		handleHTTPError(err, next);
	}
};

export {
	getCourseById,
	getCourses,
	createCourse,
	updateCourse,
	deleteCourse,
};
