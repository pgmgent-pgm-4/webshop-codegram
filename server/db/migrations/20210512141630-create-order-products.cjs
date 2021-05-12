'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Order_Products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      courses_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Courses',
          key: 'id'
        }
      },
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Orders',
          key: 'id'
        }
      },
      price: {
        allowNull: false,
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
    await queryInterface.dropTable('Order_Products');
  }
};