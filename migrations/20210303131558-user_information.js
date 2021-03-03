'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_details', {
      user_id: {
        type: Sequelize.INTEGER({
          length: 11
        }),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: Sequelize.STRING({
          length: 100
        }),
        allowNull: false,
        unique: true
      },
      contact_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
        unique: true
      },
      password: {
        type: Sequelize.STRING({
          length: 100
        })
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_details');
  }
};
