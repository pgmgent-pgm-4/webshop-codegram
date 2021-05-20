import 'babel-polyfill';

import database from '../index.js';
database.connect();

export default {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable(database.CourseVideos.tableName, database.CourseVideos.attributes);
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable(database.CourseVideos.tableName);
  }
};