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
 *     operationId: getCategories
 *     summary: Retrieve a list of categories
 *     description: Retrieve a list of categories. Can be used to populate a list of categories when prototyping or testing an API.*
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: A list of categories.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */
router.get('/categories', categoryController.getCategories);

/**
 * @swagger
 * /api/categories/{categoryId}:
 *   get:
 *     operationId: getCategoriesById
 *     summary: Retrieve a category by id
 *     description: Retrieve category by id.
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *     responses:
 *       200:
 *         description: A category by ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */      

router.get('/categories/:categoryId', categoryController.getCategoryById);

/**
 * @swagger
 * /api/categories/name/{categoryName}:
 *   get:
 *     operationId: getCategoriesByName
 *     summary: Retrieve a category by name
 *     description: Retrieve a category by name.
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: categoryName
 *         required: true
 *     responses:
 *       200:
 *         description: A category by Name.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 */ 

router.get('/categories/name/:categoryName', categoryController.getCategoryByName);

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Create a new category
 *     description: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Category Created
 */

router.post('/categories', categoryController.createCategory);

/**
 * @swagger
 * /api/categories/name/{categoryName}:
 *   put:
 *     summary: Edit an existing category
 *     description: Edit an existing category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: categoryName
 *         schema:
 *           type: integer
 *         required: true
 */

router.put('/categories/name/:categoryName', categoryController.updateCategory);

/**
 * @swagger
 * /api/categories/name/{categoryName}:
 *   delete:
 *     summary: Delete a category
 *     description: Delete a category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: categoryName
 *         schema:
 *           type: integer
 *         required: true
 */

router.delete('/categories/name/:categoryName', categoryController.deleteCategory);

// Courses

/**
 * @swagger
 * /api/courses:
 *   get:
 *     operationId: getCourses
 *     summary: Retrieve a list of courses
 *     description: Retrieve a list of courses. Can be used to populate a list of courses when prototyping or testing an API.*
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: A list of courses.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 */

router.get('/courses', courseController.getCourses);

/**
 * @swagger
 * /api/courses/{courseId}:
 *   get:
 *     operationId: getCoursesById
 *     summary: Retrieve a course by id
 *     description: Retrieve a course by id.
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *     responses:
 *       200:
 *         description: A course by ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 */ 

router.get('/courses/:courseId', courseController.getCourseById);

/**
 * @swagger
 * /api/courses:
 *   post:
 *     summary: Create a new course
 *     description: Create a new course
 *     tags: [Courses]
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       201:
 *         description: Course Created
 */

router.post('/courses', courseController.createCourse);

/**
 * @swagger
 * /api/courses/{courseId}:
 *   put:
 *     summary: Change an existing course
 *     description: Change an existing course
 *     tags: [Courses]
 */

router.put('/courses/:courseId', courseController.updateCourse);

/**
 * @swagger
 * /api/courses/{courseId}:
 *   delete:
 *     summary: Delete a course
 *     description: Delete a course
 *     tags: [Courses]
 */

router.delete('/courses/:courseId', courseController.deleteCourse);

// Newsletters

/**
 * @swagger
 * /api/newsletters:
 *   get:
 *     operationId: getNewsletters
 *     summary: Retrieve a list of newsletters
 *     description: Retrieve a list of newsletters. Can be used to populate a list of newsletters when prototyping or testing an API.*
 *     tags: [Newsletters]
 *     responses:
 *       200:
 *         description: A list of newsletters.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Newsletter'
 */

router.get('/newsletters', newsletterController.getNewsletters);

/**
 * @swagger
 * /api/newsletters/{newsletterId}:
 *   get:
 *     operationId: getNewslettersById
 *     summary: Retrieve a newsletter by id
 *     description: Retrieve a newsletter by id.
 *     tags: [Newsletters]
 *     parameters:
 *       - in: path
 *         name: newsletterId
 *         required: true
 *     responses:
 *       200:
 *         description: A newsletter by ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Newsletter'
 */

router.get('/newsletters/:newsletterId', newsletterController.getNewsletterById);

/**
 * @swagger
 * /api/newsletters:
 *   post:
 *     summary: Create a new newsletter
 *     description: Create a new newsletter
 *     tags: [Newsletters]
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Newsletter'
 *     responses:
 *       201:
 *         description: Newsletter Created
 */

router.post('/newsletters', newsletterController.createNewsletter);

/**
 * @swagger
 * /api/newsletters/{newsletterId}:
 *   put:
 *     summary: Change an existing newsletter
 *     description: Change an existing newsletter
 *     tags: [Newsletters]
 */

router.put('/newsletters/:newsletterId', newsletterController.updateNewsletter);

/**
 * @swagger
 * /api/newsletters/{newsletterId}:
 *   delete:
 *     summary: Delete a newsletter
 *     description: Delete a newsletter
 *     tags: [Newsletters]
 */

router.delete('/newsletters/:newsletterId', newsletterController.deleteNewsletter);

// Orders

/**
 * @swagger
 * /api/orders:
 *   get:
 *     operationId: getOrders
 *     summary: Retrieve a list of orders
 *     description: Retrieve a list of orders. Can be used to populate a list of orders when prototyping or testing an API.*
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: A list of orders.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */

router.get('/orders', orderController.getOrders);

/**
 * @swagger
 * /api/orders/{orderId}:
 *   get:
 *     operationId: getOrdersById
 *     summary: Retrieve an order by id
 *     description: Retrieve an order by id.
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *     responses:
 *       200:
 *         description: An order by ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 */

router.get('/orders/:orderId', orderController.getOrderById);

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     description: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: Order Created
 */

router.post('/orders', orderController.createOrder);

/**
 * @swagger
 * /api/orders/{orderId}:
 *   put:
 *     summary: Change an existing order
 *     description: Change an existing order
 *     tags: [Orders]
 */

router.put('/orders/:orderId', orderController.updateOrder);

/**
 * @swagger
 * /api/orders/{orderId}:
 *   delete:
 *     summary: Delete a order
 *     description: Delete a order
 *     tags: [Orders]
 */

router.delete('/orders/:orderId', orderController.deleteOrder);

// Payments

/**
 * @swagger
 * /api/payments:
 *   get:
 *     operationId: getPayments
 *     summary: Retrieve a list of payment methods
 *     description: Retrieve a list of payment methods. Can be used to populate a list of payment methods when prototyping or testing an API.*
 *     tags: [Payments]
 *     responses:
 *       200:
 *         description: A list of payment methods.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 */

router.get('/payments', paymentController.getPayments);


/**
 * @swagger
 * /api/payments/{paymentId}:
 *   get:
 *     operationId: getPaymentsById
 *     summary: Retrieve a payment by id
 *     description: Retrieve a payment by id.
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         required: true
 *     responses:
 *       200:
 *         description: A payment by ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 */

router.get('/payments/:paymentId', paymentController.getPaymentById);

/**
 * @swagger
 * /api/payments:
 *   post:
 *     summary: Create a new payment method
 *     description: Create a new payment method
 *     tags: [Payments]
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Payment'
 *     responses:
 *       201:
 *         description: Payment Created
 */

router.post('/payments', paymentController.createPayment);

/**
 * @swagger
 * /api/payments/{paymentId}:
 *   put:
 *     summary: Change an existing payment method
 *     description: Change an existing method
 *     tags: [Payments]
 */

router.put('/payments/:paymentId', paymentController.updatePayment);

/**
 * @swagger
 * /api/payments/{paymentId}:
 *   delete:
 *     summary: Delete a payment method
 *     description: Delete a payment method
 *     tags: [Payments]
 */

router.delete('/payments/:paymentId', paymentController.deletePayment);

// Profiles

/**
 * @swagger
 * /api/profiles:
 *   get:
 *     operationId: getProfiles
 *     summary: Retrieve a list of profiles
 *     description: Retrieve a list of profiles. Can be used to populate a list of profiles when prototyping or testing an API.*
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: A list of profiles.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 */

router.get('/profiles', profileController.getProfiles);

/**
 * @swagger
 * /api/profiles/{profileId}:
 *   get:
 *     operationId: getProfilesById
 *     summary: Retrieve a profile by id
 *     description: Retrieve a profile by id.
 *     tags: [Profiles]
 *     parameters:
 *       - in: path
 *         name: profileId
 *         required: true
 *     responses:
 *       200:
 *         description: A profile by ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profile'
 */

router.get('/profiles/:profileId', profileController.getProfileById);

/**
 * @swagger
 * /api/profiles:
 *   post:
 *     summary: Create a new user profile
 *     description: Create a new user profile
 *     tags: [Profiles]
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Profile'
 *     responses:
 *       201:
 *         description: Profile Created
 */

router.post('/profiles', profileController.createProfile);

/**
 * @swagger
 * /api/profiles/{profileId}:
 *   put:
 *     summary: Change an existing user profile
 *     description: Change an existing user profile
 *     tags: [Profiles]
 */

router.put('/profiles/:profileId', profileController.updateProfile);

/**
 * @swagger
 * /api/profiles/{profileId}:
 *   delete:
 *     summary: Delete a user profile
 *     description: Delete a user profile
 *     tags: [Profiles]
 */

router.delete('/profiles/:profileId', profileController.deleteProfile);

// Promotions

/**
 * @swagger
 * /api/promotions:
 *   get:
 *     operationId: getPromotions
 *     summary: Retrieve a list of promotions
 *     description: Retrieve a list of promotions. Can be used to populate a list of promotions when prototyping or testing an API.*
 *     tags: [Promotions]
 *     responses:
 *       200:
 *         description: A list of promotions.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Promotion'
 */

router.get('/promotions', promotionController.getPromotions);

/**
 * @swagger
 * /api/promotions/{promotionId}:
 *   get:
 *     operationId: getPromotionById
 *     summary: Retrieve a promotion by id
 *     description: Retrieve a promotion by id.
 *     tags: [Promotions]
 *     parameters:
 *       - in: path
 *         name: promotionId
 *         required: true
 *     responses:
 *       200:
 *         description: A promotion by ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Promotion'
 */

router.get('/promotions/:promotionId', promotionController.getPromotionById);

/**
 * @swagger
 * /api/promotions:
 *   post:
 *     summary: Create a new promotion
 *     description: Create a new promotion
 *     tags: [Promotions]
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Promotion'
 *     responses:
 *       201:
 *         description: Promotion Created
 */

router.post('/promotions', promotionController.createPromotion);

/**
 * @swagger
 * /api/promotions/{promotionId}:
 *   put:
 *     summary: Change an existing promotion
 *     description: Change an existing promotion
 *     tags: [Promotions]
 */

router.put('/promotions/:promotionId', promotionController.updatePromotion);

/**
 * @swagger
 * /api/promotions/{promotionId}:
 *   delete:
 *     summary: Delete a promotion
 *     description: Delete a promotion
 *     tags: [Promotions]
 */

router.delete('/promotions/:promotionId', promotionController.deletePromotion);

// Subscriptions

/**
 * @swagger
 * /api/subscriptions:
 *   get:
 *     operationId: getSubscriptions
 *     summary: Retrieve a list of subscriptions
 *     description: Retrieve a list of subscriptions. Can be used to populate a list of subscriptions when prototyping or testing an API.*
 *     tags: [Subscriptions]
 *     responses:
 *       200:
 *         description: A list of subscriptions.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subscription'
 */

router.get('/subscriptions', subscriptionController.getSubscriptions);

/**
 * @swagger
 * /api/subscriptions/{subscriptionId}:
 *   get:
 *     operationId: getSubscriptionById
 *     summary: Retrieve a subscription by id
 *     description: Retrieve a subscription by id.
 *     tags: [Subscriptions]
 *     parameters:
 *       - in: path
 *         name: subscriptionId
 *         required: true
 *     responses:
 *       200:
 *         description: A subscription by ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subscription'
 */

router.get('/subscriptions/:subscriptionId', subscriptionController.getSubscriptionById);

/**
 * @swagger
 * /api/subscriptions:
 *   post:
 *     summary: Create a new subscription
 *     description: Create a new subscription
 *     tags: [Subscriptions]
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subscription'
 *     responses:
 *       201:
 *         description: Subscription Created
 */

router.post('/subscriptions', subscriptionController.createSubscription);

/**
 * @swagger
 * /api/subscriptions/{subscriptionId}:
 *   put:
 *     summary: Change an existing subscription
 *     description: Change an existing subscription
 *     tags: [Subscriptions]
 */

router.put('/subscriptions/:subscriptionId', subscriptionController.updateSubscription);

/**
 * @swagger
 * /api/subscriptions/{subscriptionId}:
 *   delete:
 *     summary: Delete a subscription
 *     description: Delete a subscription
 *     tags: [Subscriptions]
 */

router.delete('/subscriptions/:subscriptionId', subscriptionController.deleteSubscription);

// Users

/**
 * @swagger
 * /api/users:
 *   get:
 *     operationId: getUsers
 *     summary: Retrieve a list of users
 *     description: Retrieve a list of users. Can be used to populate a list of users when prototyping or testing an API.*
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

router.get('/users', userController.getUsers);

/**
 * @swagger
 * /api/users/{userId}:
 *   get:
 *     operationId: getUserById
 *     summary: Retrieve a user by id
 *     description: Retrieve a user by id.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *     responses:
 *       200:
 *         description: A user by ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

router.get('/users/:userId', userController.getUserById);

/**
 * @swagger
 * /api/users/name/{userName}:
 *   get:
 *     operationId: getUserByName
 *     summary: Retrieve a user by name
 *     description: Retrieve a user by name.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userName
 *         required: true
 *     responses:
 *       200:
 *         description: A user by name.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 */

router.get('/users/name/:username', userController.getUserByUsername);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User Created
 */


router.post('/users', userController.createUser);
router.put('/users/:userId', userController.updateUser);

/**
 * @swagger
 * /api/users/{userId}:
 *   put:
 *     summary: Change an existing user
 *     description: Change an existing user
 *     tags: [Users]
 */

router.put('/users/:userId', userController.updateUserByAdmin);

/**
 * @swagger
 * /api/users/{userId}:
 *   delete:
 *     summary: Delete a user
 *     description: Delete a user
 *     tags: [Users]
 */

router.delete('/users/:userId', userController.deleteUser);

// Videos

/**
 * @swagger
 * /api/videos:
 *   get:
 *     operationId: getVideos
 *     summary: Retrieve a list of videos
 *     description: Retrieve a list of videos. Can be used to populate a list of videos when prototyping or testing an API.*
 *     tags: [Videos]
 *     responses:
 *       200:
 *         description: A list of videos.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 */

router.get('/videos', videoController.getVideos);

/**
 * @swagger
 * /api/videos/{videoId}:
 *   get:
 *     operationId: getVideoById
 *     summary: Retrieve a video by id
 *     description: Retrieve a video by id.
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *     responses:
 *       200:
 *         description: A video by ID.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 */

router.get('/videos/:videoId', videoController.getVideoById);

/**
 * @swagger
 * /api/videos:
 *   post:
 *     summary: Create a new video
 *     description: Create a new video
 *     tags: [Videos]
 *     requestBody:
 *       description: Optional description in *Markdown*
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Video'
 *     responses:
 *       201:
 *         description: Video Created
 */

router.post('/videos', videoController.createVideo);

/**
 * @swagger
 * /api/videos/{videoId}:
 *   put:
 *     summary: Change an existing video
 *     description: Change an existing video
 *     tags: [Videos]
 */

router.put('/videos/:videoId', videoController.updateVideo);

/**
 * @swagger
 * /api/videos/{videoId}:
 *   delete:
 *     summary: Delete a video
 *     description: Delete a video
 *     tags: [Videos]
 */

router.delete('/videos/:videoId', videoController.deleteVideo);

/**
 * @swagger
 * components:  
 *   schemas:
 *     Category:  
 *       type: object
 *       properties:
 *         category: 
 *           type: object
 *           properties:  
 *             id:
 *               type: integer
 *               format: uuid
 *               description: The category ID.
 *               example: 90900i0iiik1
 *             name:
 *               type: string
 *               description: The categories name.
 *               example: CSS
 *             description:
 *               type: string
 *               description: The description of the category
 *               example: CSS stands for Cascading Style Sheets
 */

/**
 * @swagger
 * components:  
 *   schemas:
 *     Order:  
 *       type: object
 *       properties:
 *         order: 
 *           type: object
 *           properties:  
 *             id:
 *               type: integer
 *               format: uuid
 *               description: The Order ID.
 *               example: 90900i0iiik1
 *             order_completed:
 *               type: boolean
 *               description: True or false depending on completed or not
 *               example: True
 *             total:
 *               type: number
 *               description: The total amount for the order
 *               example: 278.00
 */

/**
 * @swagger
 * components:  
 *   schemas:
 *     Payment:  
 *       type: object
 *       properties:
 *         payment: 
 *           type: object
 *           properties:  
 *             id:
 *               type: integer
 *               format: uuid
 *               description: The Payment ID.
 *               example: 90900i0iiik1
 *             total:
 *               type: number
 *               description: The total amount for the order
 *               example: 278.00
 */

/**
 * @swagger
 * components:  
 *  schemas:
 *    Subscription:  
 *      type: object
 *      properties:
 *        subscription: 
 *          type: object
 *          properties:  
 *            id:
 *              type: integer
 *              format: uuid
 *              description: The Subscription ID.
 *              example: 90900i0iiik1
 *            start_date:
 *              type: string
 *              format: date
 *              description: Date of when the subscription started
 *              example: 31-05-2021
 *            end_date:
 *              type: string
 *              format: date
 *              description: Date of when the subscription ends
 *              example: 31-06-2021
 *            price:
 *              type: number
 *              description: The cost of the subscription
 *              example: 278.00
 *            subscription_type:
 *              type: string
 *              description: The type of subscription the user is getting
 *              example: 3          
 */

/**
 * @swagger
 * components:  
 *   schemas:
 *     User:  
 *       type: object
 *       properties:
 *         user: 
 *           type: object
 *           properties:  
 *             id:
 *               type: integer
 *               format: uuid
 *               description: The User ID.
 *               example: 90900i0iiik1
 *             username:
 *               type: string
 *               format: username
 *               description: The unique username of a user
 *               example: Ariel_the_little_mermaid
 *             email:
 *               type: string
 *               format: email
 *               description: The email-address of a user
 *               example: example@email.com
 *             email_verified:
 *               type: boolean
 *               description: False or True depending on whether the user has verified their account through email
 *               example: False
 *             password:
 *               type: string
 *               format: password
 *               description: The password of the user
 *               example: IloveReact123!
 *             role:
 *               type: string
 *               description: This is either an Admin or a User 
 *               example: admin   
 *             last_login:
 *               type: string
 *               format: date
 *               description: The date of the last time a user logged in
 *               example: 31-05-2021      
 */

/**
 * @swagger
 * components:  
 *   schemas:
 *     Profile:  
 *      type: object
 *      properties:
 *        profile: 
 *          type: object
 *          properties:  
 *            id:
 *              type: integer
 *              format: uuid
 *              description: The Profile ID.
 *              example: 90900i0iiik1
 *            dob:
 *              type: string
 *              format: date
 *              description: The date of birth of a user
 *              example: 01-01-2001
 *            img_url:
 *              type: string
 *              format: image
 *              description: The image of a user
 *              example: thisisanimage.jpg
 *            subscription:
 *              type: string
 *              description: The type of subscription that's tied to the profile
 *              example: Monthly
 *            recent_activity:
 *              type: string
 *              description: The recent activity of a user, still trying to work out what should go here
 *              example: "{Course: CSS, Video: 2}"
 */

/**
 * @swagger
 * components:  
 *   schemas:
 *     Promotion:  
 *       type: object
 *       properties:
 *         promotion: 
 *           type: object
 *           properties:  
 *             id:
 *               type: integer
 *               format: uuid
 *               description: The Promotion ID.
 *               example: 90900i0iiik1
 *             price_modifier:
 *               type: number
 *               description: amount that the price will be multiplied with, to reflect the promotion
 *               example: 0.8
 */

/**
 * @swagger
 * components:  
 *   schemas:
 *     Video:  
 *       type: object
 *       properties:
 *         video: 
 *           type: object
 *           properties:  
 *             id:
 *               type: integer
 *               format: uuid
 *               description: The Profile ID.
 *               example: 90900i0iiik1
 *             url:
 *               type: string
 *               format: url
 *               description: Url leading to a YouTube video
 *               example: wwww.youtube/CSS.com
 *             name:
 *               type: string
 *               description: The title of the video
 *               example: CSS - A Course For Beginners
 *             thumbnail_url:
 *               type: string
 *               format: url
 *               description: The url of the video's thumbnail
 *               example: thisisanimage.jpg
 *             duration:
 *               type: string
 *               description: The duration of the video in seconds
 *               example: 65849
 */

/**
 * @swagger
 * components:  
 *   schemas:
 *     Course:  
 *       type: object
 *       properties:
 *         course: 
 *           type: object
 *           properties:  
 *             id:
 *               type: integer
 *               format: uuid
 *               description: The Profile ID.
 *               example: 90900i0iiik1
 *             unlocked:
 *               type: boolean
 *               description: False or True depending on whether User unlocked the course
 *               example: True
 *             name:
 *               type: string
 *               description: The title of the Course
 *               example: CSS
 *             description:
 *               type: string
 *               description: The description of what the course is about
 *               example: This Course is about CSS ...
 *             price:
 *               type: number
 *               description: The price of the course
 *               example: 278.00
 *             tags:
 *               type: string
 *               description: The tags associated with a course
 *               example: "[Python, Intermediate ,2020, maiores]"
 *             duration:
 *               type: integer
 *               description: The duration of the course in seconds
 *               example: 65849858934943
 *             difficulty_level:
 *               type: string
 *               description: The difficulty level of the course
 *               example: Beginner
 *             certificate:
 *               type: boolean
 *               description: True or false depending on whether the course comes with a certificate
 *               example: False
 *             language:
 *               type: string
 *               description: The language that the course will be taught in
 *               example: CSS
 *             CategoryId:
 *               type: string
 *               description: the id of the corresponding category
 *               example: f8ee895d-ce9b-4c82-a9e4-1b1c173c3a9d
 */

/**
 * @swagger
 * components:  
 *   schemas:
 *     Newsletter:  
 *       type: object
 *       properties:
 *         newsletter: 
 *           type: object
 *           properties:  
 *             id:
 *               type: integer
 *               format: uuid
 *               description: The Profile ID.
 *               example: 90900i0iiik1
 *             content:
 *               type: string
 *               description: The content of the Newsletter
 *               example: This week a lot of new exciting developments have happened on Codegram....
 */

/**
 * @swagger
 * tags:
 *   - name: Categories
 *     description: Categories of the available courses
 *   - name: Orders
 *     description: Orders by a user of courses
 *   - name: Payments
 *     description: Payment methods from a user
 *   - name: Subscriptions
 *     description: Subscriptions user might have
 *   - name: Users
 *     description: Users of website
 *   - name: Profiles
 *     description: Profiles of website users
 *   - name: Promotions
 *     description: Promtions on certain courses or subscriptions
 *   - name: Videos
 *     description: Renders the videolink 
 *   - name: Courses
 *     description: Name of available courses
 *   - name: Newsletters
 *     description: Permission to send out newsletters
 */

/**
 * Export the router
 */
export default router;
