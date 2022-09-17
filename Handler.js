const Mobil = require('./Mobil');

const addMobil = (request,h) => {

      const no_registrasi = request.payload.no_registrasi;
      const departure = request.payload.departure;
      const status = request.payload.status;
      const biaya = request.payload.biaya;
      const arrival = new Date();

      const newMobil = {no_registrasi, arrival, departure, status, biaya};
      const result = Mobil.insert(newMobil);
          
      if (result) {
        const response = h.response({
          status: 'success',
          message: 'Data berhasil di masukkan!'
        });
        response.code(201);
        return response;
      }

      const response = h.response({
        status: 'fail',
        message: 'data parkir gagal ditambahkan!',
      });
      response.code(400);
      return response;

};

const UpdateMobil = () => {

}

const cekMobil = () => {

}

const HapusMobil = () => {

}

module.exports = { addMobil, UpdateMobil, cekMobil,  HapusMobil};