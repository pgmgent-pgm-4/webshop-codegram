/*
Import custom packages
*/
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
    // Get categories from database
    const allCategories = await database.Category.findAll({raw: true});
    const allCourses = await database.Course.findAll({raw: true});
    let courses = allCourses;
    let categories = allCategories;
    if (!!category) {
      courses = allCourses.filter(course => course.CategoryId === category);
      categories = allCategories.filter(cat => cat.id === category);
    }
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
    res.render('course');
  } catch (error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get all courses
 */
const getCourses = async (req, res, next) => {
  try {
    const allCourses = await database.Course.findAll({raw: true});
    let courses = allCourses;
    res.render('courses', {
      courses
    })
  } catch (error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get a single video
 */
const getVideo = async (req, res, next) => {
  try {
    res.render('video');
  } catch (error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get news
 */
const getNews = async (req, res, next) => {
  try {
    res.render('news');
  } catch (error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get user
 */
const getUser = async (req, res, next) => {
  try {
    const { username } = req.params;
		const user = await database.User.findOne({
			where: {
				username: username,
			}
		}, {raw: true});
		const profile = await database.Profile.findOne({
			where: {
				UserId: user.id,
			}
		}, {raw: true});
		const courses = await user.getCourses({raw:true});
		const fullUser = {
			...user.dataValues,
			profile,
			courses
		}
    res.render('user', {
      fullUser
    });
  } catch (error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get cart
 */
const getCart = async (req, res, next) => {
  try {
    res.render('cart');
  } catch (error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get payment
 */
 const getPayment = async (req, res, next) => {
  try {
    res.render('payment');
  } catch (error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get terms and conditions
 */
 const getTermsAndConditions = async (req, res, next) => {
  try {
    res.render('terms_and_conditions');
  } catch (error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get privacy policy
 */
 const getPrivacyPolicy = async (req, res, next) => {
  try {
    res.render('privacy_policy');
  } catch (error) {
    handleHTTPError(error, next);
  }
}

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
};
