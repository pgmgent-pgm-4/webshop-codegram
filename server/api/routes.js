/**
 * Import packages
 */
import express from 'express';

/**
 * Import custom packages
 */
// controllers i.e.: import * as parseUsers from './controllers/parseUsers.js';
// middleware i.e.: import { isUserAuthenticated } from './middleware/auth.js';

/**
 * Create a router
 */
const router = express.Router();

/**
 * Routes for ... all the things
 */
// users i.e.: router.get('/users', parseUsers.getUsers);
// catalog 
// courses

router.get('/', (req, res) => {
  res.status(200).send('<h1>Welcome to the API!</h1>')
})

/**
 * Export the router
 */
export default router;