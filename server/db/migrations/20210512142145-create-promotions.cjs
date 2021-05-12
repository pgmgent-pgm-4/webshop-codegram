'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Promotions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Courses',
          key: 'id'
        }
      },
      subscription_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Subscriptions',
          key: 'id'
        }
      },
      price_modifier: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Promotions');
  }
};