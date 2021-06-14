/*
Import custom packages
*/
import database from '../db'
import { /* HTTPError, */convertArrayToPagedObject, handleHTTPError } from '../utils';

database.connect();

/**
 * Get user profile
 */
const getUserInfo = async (req, res, next) => {
  try {
    res.render('me');
  } catch (err) {
    handleHTTPError(err, next);
  }
}

export { getUserInfo }