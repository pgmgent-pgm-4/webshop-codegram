/**
 * Import packages
 */
 import express from 'express';

 /*
 Import custom packages
 */
import * as categoryController from '../controllers/category.controller';
import * as courseController from '../controllers/course.controller';

/**
 * Create a router
 */
const router = express.Router();

/*
Routes
*/
router.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to the API!</h1>')
});

router.get('/categories', categoryController.getCategories);
router.get('/categories/:categoryId', categoryController.getCategoryById);
router.get('/courses', courseController.getCourses);


/**
 * Export the router
 */
export default router;
