const database = require('./db_config');

const dataMobil = [
    {
        no_registrasi: String,
        arrival: String,
        departure: String,
        status: String,
        biaya: String
    }
];

const insert = function(dataMobil){
  let result = database.query('INSERT INTO car_park (no_registrasi, arrival, departure, status, biaya) VALUES  ("' + dataMobil.no_registrasi + '","' + dataMobil.arrival + '","' + dataMobil.departure + '","' + dataMobil.status + '","' + dataMobil.biaya + '")');
  return result;
}

const get = function(dataMobil){
  let result = database.query();
  return result;
}

const getlist = function(dataMobil){
  let result = database.query();
  return result;
}

const update = function(dataMobil){
  let result = database.query();
  return result;
}

const deleted = function(dataMobil){
  let result = database.query();
  return result;
}
 
module.exports = {dataMobil, insert, get, getlist, update, deleted};