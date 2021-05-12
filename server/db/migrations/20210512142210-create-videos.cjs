'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Videos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      playlist_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Course_Videos',
          key: 'id'
        }
      },
      url: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      paused_at: {
        type: Sequelize.INTEGER
      },
      duration: {
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
    await queryInterface.dropTable('Videos');
  }
};