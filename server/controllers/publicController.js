/*
Import custom packages
*/
// import dataService from '../services/dataService';
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
    console.log(category)
    // Get categories from database
    const allCategories = await database.Category.findAll({
      raw: true
    });
    let categories = allCategories;
    res.render('categories', {
      categories,
    })
  } catch (error) {
    handleHTTPError(error, next);
  }
}

const getCourses = async (req, res, next) => {
  try {
    const { category, min, max, tag, level } = req.query;    
    const courses = await database.Course.findAll({where: {CategoryId: (category === undefined ? {[Op.ne]: 'undefined'} : category), difficulty_level: (level === undefined ? {[Op.ne]: 'undefined'} : level), price: (min === undefined && max === undefined) ? {[Op.ne]: 'undefined'} : (min === undefined && max !== undefined)? {[Op.lte]: max} : (min !== undefined && max === undefined)? {[Op.gte]: min} : {[Op.between]: [min, max]}, tags: (tag === undefined ) ? {[Op.ne]: 'undefined'} : (typeof tag === 'object') ? {[Op.or]: tag.map(t => {return {[Op.substring]: t}})} : {[Op.substring]: tag}}});
    res.status(200).json(courses);
  } catch (error) {
    handleHTTPError(error, next);
  }
}

// const getLogin, getSignup, getCourses, getCourse, getVideo, getNews, getUser, getCart, getPayment, getTermsAndConditions, getPrivacyPolicy, getContact;

export {
  getHome,
  getCategories,
  getCourses,
  /*   getLogin,
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
    getContact, */
};