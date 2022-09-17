const Mobil = require('./Handler');

const routes = [
    {
      //menambah parkir mobil  
      method: 'POST',
      path: '/mobil/add',
      handler: Mobil.addMobil,
    },
    {
      //mengupdate parkir mobil  
      method: 'POST',
      path: '/mobil/update',
      handler: Mobil.UpdateMobil,
    },
    {
      //cek parkir mobil  
      method: 'POST',
      path: '/mobil/cek',
      handler: Mobil.cekMobil,
    },
    {
      //hapus parkir mobil  
      method: 'POST',
      path: '/mobil/hapus',
      handler: Mobil.HapusMobil,
    },
  ];

module.exports = routes;