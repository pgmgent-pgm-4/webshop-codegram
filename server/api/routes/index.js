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

// Categories
router.get('/categories', categoryController.getCategories);
router.get('/categories/:categoryId', categoryController.getCategoryById);
router.post('/categories', categoryController.createCategory);
router.put('/categories/:categoryId', categoryController.updateCategory);

// Courses
router.get('/courses', courseController.getCourses);
router.get('/courses/:courseId', courseController.getCourseById);
router.post('/courses', courseController.createCourse);

// Newsletters
router.get('/newsletters', newsletterController.getNewsletters);
router.get('/newsletters/:newsletterId', newsletterController.getNewsletterById);
router.post('/newsletters', newsletterController.createNewsletter);

// Orders
router.get('/orders', orderController.getOrders);
router.get('/orders/:orderId', orderController.getOrderById);
router.post('/orders', orderController.createOrder);

// Payments
router.get('/payments', paymentController.getPayments);
router.get('/payments/:paymentId', paymentController.getPaymentById);
router.post('/payments', paymentController.createPayment);

// Profiles
router.get('/profiles', profileController.getProfiles);
router.get('/profiles/:profileId', profileController.getProfileById);
router.post('/profiles', profileController.createProfile);

// Promotions
router.get('/promotions', promotionController.getPromotions);
router.get('/promotions/:promotionId', promotionController.getPromotionById);
router.post('/promotions', promotionController.createPromotion);

// Subscriptions
router.get('/subscriptions', subscriptionController.getSubscriptions);
router.get('/subscriptions/:subscriptionId', subscriptionController.getSubscriptionById);
router.post('/subscriptions', subscriptionController.createSubscription);

// Users
router.get('/users', userController.getUsers);
router.get('/users/:userId', userController.getUserById);
router.post('/users', userController.createUser);

// Videos
router.get('/videos', videoController.getVideos);
router.get('/videos/:videoId', videoController.getVideoById);
router.post('/videos', videoController.createVideo);


/**
 * Export the router
 */
export default router;
