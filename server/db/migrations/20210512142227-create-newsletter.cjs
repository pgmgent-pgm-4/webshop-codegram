'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Newsletters', {
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
      date_since_sub: {
        allowNull: false,
        type: Sequelize.DATE
      },
      email: {
        allowNull: false,
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Newsletters');
  }
};