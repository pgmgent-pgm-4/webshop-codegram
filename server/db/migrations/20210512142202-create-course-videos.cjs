'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Course_Videos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Courses',
          key: 'id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Course_Videos');
  }
};