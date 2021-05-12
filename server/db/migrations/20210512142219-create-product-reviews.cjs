'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product_Reviews', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        }
      },
      course_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Courses',
          key: 'id'
        }
      },
      stars: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      review: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Product_Reviews');
  }
};