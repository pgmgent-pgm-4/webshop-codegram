/*
Import custom packages
*/
import database from '../db'
import {
  /* HTTPError, */
  handleHTTPError
} from '../utils';
import {
  Op
} from 'sequelize';

database.connect();
/*
Get Home Render
*/
const getHome = async (req, res, next) => {
  try {
    // Get categories from database
    let categories = await database.Category.findAll({
      raw: true
    });
    let courses = await database.Course.findAll({
      raw: true
    });
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
    const {
      category
    } = req.query;
    // Get categories from database
    const allCategories = await database.Category.findAll({
      raw: true
    });
    let categories = allCategories;
    if (!!category) {
      courses = allCourses.filter(course => course.CategoryId === category);
      categories = allCategories.filter(cat => cat.id === category);
    }
    res.render('categories', {
      categories,
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


const getCourses = async (req, res, next) => {
  try {
    const {
      category,
      min,
      max,
      tag,
      level,
      s
    } = req.query;
    const courses = await database.Course.findAll({
      where: {
        CategoryId: (category === undefined ? {
          [Op.ne]: 'undefined'
        } : category),
        difficulty_level: (level === undefined ? {
          [Op.ne]: 'undefined'
        } : level),
        price: (min === undefined && max === undefined) ? {
          [Op.ne]: 'undefined'
        } : (min === undefined && max !== undefined) ? {
          [Op.lte]: max
        } : (min !== undefined && max === undefined) ? {
          [Op.gte]: min
        } : {
          [Op.between]: [min, max]
        },
        tags: (tag === undefined) ? {
          [Op.ne]: 'undefined'
        } : (typeof tag === 'object') ? {
          [Op.or]: tag.map(t => {
            return {
              [Op.substring]: t
            }
          })
        } : {
          [Op.substring]: tag
        }
      },
      order: [
          ((s === "prd") ? ['price', 'DESC'] : (s === "pra") ? ['price', 'ASC'] : (s === "nd") ? ['createdAt', 'DESC'] : (s === "na") ? ['createdAt', 'ASC'] : (s === "dud") ? ['duration', 'DESC'] : (s === "dua") ? ['duration', 'ASC'] : ['name', 'ASC']),
      ]
    });
    res.status(200).json(courses);
  } catch (error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get a single video
 */
const getCourse = async (req, res, next) => {
  try {
    const {
      courseId
    } = req.params;
    res.render('course');
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
    const news = await database.News.findAll({raw: true})
    res.status(200).json(news);
  } catch (error) {
    handleHTTPError(error, next);
  }
}

/**
 * Get user
 */
const getUser = async (req, res, next) => {
  try {
    res.render('user');
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
  getCourse,
  getCourses,
  getVideo,
  getNews,
  getUser,
  getCart,
  getPayment,
  getTermsAndConditions,
  getPrivacyPolicy,
};