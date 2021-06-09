/**
 * Import packages
 */
import express from 'express';

/**
 * Import custom packages
 */
import * as publicController from '../controllers/publicController';

/**
 * Make a router
 */
const router = express.Router();

/**
 * Routes
 */
router.get('/', publicController.getHome);
router.get('/categories', publicController.getCategories);
router.get('/login', publicController.getLogin); // login form
router.get('/signup', publicController.getSignup); // signup form
/*router.get('/courses', publicController.getCourses); // courses + search + filters */
router.get('/course/:courseId', publicController.getCourse); // single course
/*router.get('/course/:courseId/:videoId', publicController.getVideo); // single video in a course
router.get('/news', publicController.getNews); // news
router.get('/users/:userId', publicController.getUser); // user + instructor
router.get('/users/:userId/cart', publicController.getCart); 
router.get('/users/:userId/payment', publicController.getPayment);
router.get('/legal/terms', publicController.getTermsAndConditions);
router.get('/legal/privacy', publicController.getPrivacyPolicy);
router.get('/contact', publicController.getContact); */

export default router;