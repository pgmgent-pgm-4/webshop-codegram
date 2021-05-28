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

export default router;