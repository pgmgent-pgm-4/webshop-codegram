'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Courses', {
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
      unlocked: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      tags: {
        allowNull: false,
        type: Sequelize.BLOB
      },
      lecturer: {
        allowNull: false,
        type: Sequelize.STRING
      },
      duration: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      difficulty_level: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      certificatate: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      language: {
        allowNull: false,
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
    await queryInterface.dropTable('Courses');
  }
};