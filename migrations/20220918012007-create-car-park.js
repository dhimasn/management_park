'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('car_parks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      no_registrasi: {
        type: Sequelize.STRING
      },
      arrival: {
        type: Sequelize.DATE
      },
      departure: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      biaya: {
        type: Sequelize.STRING
      },
      lama: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('car_parks');
  }
};