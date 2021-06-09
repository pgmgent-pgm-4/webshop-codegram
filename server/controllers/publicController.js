/*
Import custom packages
*/
// import dataService from '../services/dataService';
import database from '../db'
import { /* HTTPError, */convertArrayToPagedObject, handleHTTPError } from '../utils';

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

/**
 * Get Login Render
 */
const getLogin = async (req, res, next) => {
  try {
    res.render('login');
  } catch (error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get Signup Render
 */
const getSignup = async (req, res, next) => {
  try {
    res.render('signup');
  } catch (error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get a single Course
 */
const getCourse = async (req, res, next) => {
  try {
    // const { courseId } = req.params;
    res.render('course');
  } catch (error) {
    handleHTTPError(error, next);
  }
}

export {
  getHome,
  getCategories,
  getLogin,
  getSignup,
/*  getCourses, */
  getCourse,
  /*getVideo,
  getNews,
  getUser,
  getCart,
  getPayment,
  getTermsAndConditions,
  getPrivacyPolicy,
  getContact, */
};
