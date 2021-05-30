/**
 * Import packages
 */
 import express from 'express';

 /*
 Import custom packages
 */
import * as categoryController from '../controllers/category.controller';
import * as courseController from '../controllers/course.controller';
import * as newsletterController from '../controllers/newsletter.controller';
import * as orderController from '../controllers/order.controller';
import * as paymentController from '../controllers/payment.controller';
import * as profileController from '../controllers/profile.controller';
import * as promotionController from '../controllers/promotion.controller';
import * as subscriptionController from '../controllers/subscription.controller';
import * as userController from '../controllers/user.controller';
import * as videoController from '../controllers/video.controller';

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


/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Retrieve a list of categories
 *     description: Retrieve a list of categories. Can be used to populate a list of categories when prototyping or testing an API.*
 *     responses:
 *       200:
 *         description: A list of categories.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The category ID.
 *                         example: 1
 *                       name:
 *                         type: string
 *                         description: The categories name.
 *                         example: Computers
 */
router.get('/categories', categoryController.getCategories);
router.get('/categories/:categoryId', categoryController.getCategoryById);
router.get('/categories/:categoryName', categoryController.getCategoryByName);

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Create a new category
 *     description: Create a new category
 */

router.post('/categories', categoryController.createCategory);
router.put('/categories/:categoryName', categoryController.updateCategory);
router.delete('/categories/:categoryName', categoryController.deleteCategory);

// Courses
router.get('/courses', courseController.getCourses);
router.get('/courses/:courseId', courseController.getCourseById);
router.post('/courses', courseController.createCourse);
router.put('/courses/:courseId', courseController.updateCourse);
router.delete('/courses/:courseId', courseController.deleteCourse);

// Newsletters
router.get('/newsletters', newsletterController.getNewsletters);
router.get('/newsletters/:newsletterId', newsletterController.getNewsletterById);
router.post('/newsletters', newsletterController.createNewsletter);
router.put('/newsletters/:newsletterId', newsletterController.updateNewsletter);
router.delete('/newsletters/:newsletterId', newsletterController.deleteNewsletter);

// Orders
router.get('/orders', orderController.getOrders);
router.get('/orders/:orderId', orderController.getOrderById);
router.post('/orders', orderController.createOrder);
router.put('/orders/:orderId', orderController.updateOrder);
router.delete('/orders/:orderId', orderController.deleteOrder);

// Payments
router.get('/payments', paymentController.getPayments);
router.get('/payments/:paymentId', paymentController.getPaymentById);
router.post('/payments', paymentController.createPayment);
router.put('/payments/:paymentId', paymentController.updatePayment);
router.delete('/payments/:paymentId', paymentController.deletePayment);

// Profiles
router.get('/profiles', profileController.getProfiles);
router.get('/profiles/:profileId', profileController.getProfileById);
router.post('/profiles', profileController.createProfile);
router.put('/profiles/:profileId', profileController.updateProfile);
router.delete('/profiles/:profileId', profileController.deleteProfile);

// Promotions
router.get('/promotions', promotionController.getPromotions);
router.get('/promotions/:promotionId', promotionController.getPromotionById);
router.post('/promotions', promotionController.createPromotion);
router.put('/promotions/:promotionId', promotionController.updatePromotion);
router.delete('/promotions/:promotionId', promotionController.deletePromotion);

// Subscriptions
router.get('/subscriptions', subscriptionController.getSubscriptions);
router.get('/subscriptions/:subscriptionId', subscriptionController.getSubscriptionById);
router.post('/subscriptions', subscriptionController.createSubscription);
router.put('/subscriptions/:subscriptionId', subscriptionController.updateSubscription);
router.delete('/subscriptions/:subscriptionId', subscriptionController.deleteSubscription);

// Users
router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:userId', userController.updateUser);
router.put('/users/:userId', userController.updateUserByAdmin);
router.delete('/users/:userId', userController.deleteUser);

// Videos
router.get('/videos', videoController.getVideos);
router.get('/videos/:videoId', videoController.getVideoById);
router.post('/videos', videoController.createVideo);
router.put('/videos/:videoId', videoController.updateVideo);
router.delete('/videos/:videoId', videoController.deleteVideo);


/**
 * Export the router
 */
export default router;
