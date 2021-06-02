/*
Import custom packages
*/
// import dataService from '../services/dataService';
import database from '../db'
import { /* HTTPError, */handleHTTPError } from '../utils';

database.connect();
/*
Get Home Render
*/
const getHome = async (req, res, next) => {
  try {
    // Get categories from database
    let categories = await database.Category.findAll({raw: true});
    let courses = await database.Course.findAll({raw: true});
    // Send response
    res.render('index', {
      categories,
      courses
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
};

/**
 * Get Categories Render
 */
const getCategories = async (req, res, next) => {
  try {
    const { category } = req.query;
    console.log(category)
    // Get categories from database
    const allCategories = await database.Category.findAll({raw: true});
    const allCourses = await database.Course.findAll({raw: true});
    let courses = allCourses;
    let categories = allCategories;
    if (!!category) {
      courses = allCourses.filter(course => course.CategoryId === category);
      categories = allCategories.filter(cat => cat.id === category);
    }
    console.log(courses)
    res.render('categories', {
      categories,
      courses,
    })
  } catch (error) {
    handleHTTPError(error, next);
  }
}

const getLogin, getSignup, getCourses, getCourse, getVideo, getNews, getUser, getCart, getPayment, getTermsAndConditions, getPrivacyPolicy, getContact;

export {
  getHome,
  getCategories,
  getLogin,
  getSignup,
  getCourses,
  getCourse,
  getVideo,
  getNews,
  getUser,
  getCart,
  getPayment,
  getTermsAndConditions,
  getPrivacyPolicy,
  getContact,
};
