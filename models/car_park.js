'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car_park extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  car_park.init({
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    no_registrasi: {type: DataTypes.STRING},
    arrival: {type: DataTypes.STRING},
    departure: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING},
    biaya: {type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'car_park',
  });
  return car_park;
};