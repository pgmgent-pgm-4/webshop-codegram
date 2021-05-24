/**
 * Import packages
 */

import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Hash password
 * @param {string} password
 * @returns {string} password hash
 */
export const hashPassword = (password) => {
  return bcrypt.hashSync(password, parseInt(process.env.SALT_ROUNDS));
};