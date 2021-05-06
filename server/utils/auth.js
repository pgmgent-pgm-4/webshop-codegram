/** 
 * Imports packages
 */
 import express from 'express';
 import passport from 'passport';
 import passportLocal from 'passport-local';
 import bcrypt from 'bcrypt';
 import jwt from 'jsonwebtoken';
 import dotenv from 'dotenv';
 
 /**
  * Imports local packages
  */
/*  import * as parseUsers from '../api/controllers/parseUsers.js';  // TODO: decide on filename and file structure for these
 import { logger } from './logger.js'; */ // TODO: create logger
 
 // Initialize dotenv
 dotenv.config();
 
 // Initialize router
 const app = express.Router();
 
 // Initialize Passport
 const LocalStrategy = passportLocal.Strategy;
 passport.use(
   new LocalStrategy({
       usernameField: 'username',
       passwordField: 'password'
     },
     async (username, password, done) => {
       try {
         // Get the user by name
         const user = await parseUsers.getUserByUsername(username); // TODO: Edit this to actually point to an existing service to parse Users
 
         // Check if the user exists
         if (!user || user.message) { // TODO: Fix error possibly not returning a message | Logic for error handling
           return done(null, false, {
             message: 'Incorrect username.'
           });
         }
 
         // Check if the password is correct
         if (!(await isValidPassword(user, password))) {
           return done(null, false, {
             message: 'Incorrect password.'
           });
         }
 
         return done(null, user);
       } catch (e) {
         return done(e);
       }
     }
   )
 );
 
 /**
  * Define endpoint for login
  */
 app.post('/login', (req, res) => {
   passport.authenticate('local', (error, user, info) => {
     if (error) {
       res.status(401).send(error);
       logger.log({level:'error', message: `Failed to authenticate user. View the log for more details.`, label: 'login'}) // TODO: create logger
     } else if (!user) {
       logger.log({level:'error', message: `Failed to authenticate user. Invalid username.`, label: 'login'}) // TODO: create logger
       res.status(401).send(info);
     } else {
       const token = jwt.sign(user, process.env.JWT_SECRET_KEY, {
         expiresIn: parseInt(process.env.JWT_LIFETIME),
       });
       res.status(200).json({
         succes: true,
         token: token,
         user: {
           id: user.id,
           username: user.username,
           is_admin: user.is_admin // TODO: Fix this field to be relevant to the webshop
         },
       });
       logger.log({level: 'info', message: `User ${user.username} logged in successfully.`, label: 'auth'}); // TODO: create logger
     }
   })(req, res);
 });
 
 /**
  * Validate password using bcrypt
  * @param {Object} user 
  * @param {String} password 
  * @returns match
  */
 const isValidPassword = async (user, password) => {
   const match = await bcrypt.compare(password, user.password);
   return match;
 };

 /**
  * Define endpoint for logout
  */
 // TODO: Create endpoint and logic for logout
 
 // Exports
 export default app;