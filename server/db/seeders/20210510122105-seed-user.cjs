'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('Users', [{
      id: uuidv4(),
      username: 'GrijsRooster',
      email: 'grijs@example.com',
      email_verification: 1,
      password: 'boe123',
      role: 'member',
      last_login: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      id: uuidv4(),
      username: 'GrijsFooster',
      email: 'grijf@example.com',
      email_verification: 1,
      password: 'boe123',
      role: 'guest',
      last_login: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     Example: */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
