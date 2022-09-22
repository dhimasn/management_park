const request = require('request')
const Models = require('../models/index')

const car_parksHandler = async (request, h) => {
    try {
        const car_parks = await Models.car_park.findAll({})
        return { 
            message: "Data car_parks berhasil diquery !",
            data: car_parks
        }
    } catch (error) {
        return h.response({ error: error.message }).code(400)
    }
}

const check_car_parkCapacityHandler = async (request, h) =>{
    try {
        const car_parks = await Models.car_park.count({
            where: {
                status:'parked'
            }
        })
        var capacity = 20 - car_parks;
        return { 
            message: "Data car_parks berhasil diquery !",
            data: capacity
        }
    } catch (error) {
        return h.response({ error: error.message }).code(400)
    }
}

const createcar_parkHandler = async (request, h) => {
    try {
        const arrival = new Date();
        const departure = null;
        const status = "parked";
        const biaya = 5000;
        const { no_registrasi} = request.payload;
        var car = await Models.car_park.findOne({ 
            attributes: ['createdAt'], 
            where: { no_registrasi: no_registrasi, status:"parked" }
        });
        if (car === null){
            const car_park = await Models.car_park.create({
                no_registrasi: no_registrasi,
                arrival: arrival,
                departure:departure,
                status:status,
                biaya:biaya
            })
            return {
                data: car_park,
                message: 'New car_park has been created.'
            }
        }else{
            return {
                message: 'the car was added.'
            }
        }
        
    } catch (error) {
        return h.response({
            error: error.message
        }).code(400)
    }
}

const updatecar_parkHandler = async (request, h) => {
    try {
        var car = await Models.car_park.findOne({ 
            attributes: ['createdAt'], 
            where: { id: request.params.id }
        })
        var date1 = car.createdAt;
        var date2 = new Date();
        var diff = Math.round(Math.abs(date2.getTime() - date1.getTime()) / 3600000);
        var biaya = (((Math.round(diff)-1) * 3000) + 5000);
        const status = "has left";
        const car_park = await Models.car_park.update({
            departure:date2,
            status: status,
            biaya: biaya
        }, {
                where: {
                    id: request.params.id,
                    status:"parked"
                }
            })
        return {
            message: 'car_park has been updated.'
        }

    } catch (error) {
        return h.response({
            error: error.message
        }).code(400)
    }
}

const findcar_parkHandler = async (request, h) => {
    try {
        var car_park = await Models.car_park.findOne({ 
            attributes: ['id', 'no_registrasi', 'arrival', 'departure', 'status', 'lama','biaya', 'createdAt', 'updatedAt'], 
            where: { id: request.params.id }
        })
        var date1 = car_park.createdAt;
        var date2 = new Date();
        var diff = Math.round(Math.abs(date2.getTime() - date1.getTime()) / 3600000);
        var biaya = (((Math.round(diff)-1) * 3000) + 5000);
        car_park.lama = diff;
        car_park.biaya = biaya;
        if (car_park !== null)      
            return { 
                message: "Data car_park berhasil diquery !",
                data: car_park,
            }
    }catch (error) {
        return h.response({
            error: error.message
        }).code(400)
    }
}

const deletecar_parkHandler = async (request, h) => {
    try {
        const car_park_id = request.params.id;
        await Models.car_park.destroy({
            where: {
                id: car_park_id
            }
        })
        return { message: 'car_park has been deleted.' }
    } catch (error) {
        return h.response({
            error: error.message
        }).code(400)
    }
}

module.exports = [
    { method: 'GET', path: '/car_parks', handler: car_parksHandler },
    { method: 'GET', path: '/car_park/get/{id}', handler: findcar_parkHandler},
    { method: 'POST', path: '/car_park', handler: createcar_parkHandler },
    { method: 'PUT', path: '/car_park/{id}', handler: updatecar_parkHandler },
    { method: 'GET', path:'/car_park/capacity', handler: check_car_parkCapacityHandler},
    { method: 'DELETE', path: '/car_park/{id}', handler: deletecar_parkHandler }
];