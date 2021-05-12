'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Payment_Infos', {
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
      payment_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Payments',
          key: 'id'
        }
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      card_number: {
        type: Sequelize.INTEGER
      },
      cvv: {
        type: Sequelize.INTEGER
      },
      expiration_date: {
        type: Sequelize.DATE
      },
      country: {
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
    await queryInterface.dropTable('Payment_Infos');
  }
};