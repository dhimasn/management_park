const Models = require('../models/index')

const car_parksHandler = async (request, h) => {
    try {
        const car_parks = await Models.car_park.findAll({})
        return { data: car_parks }
    } catch (error) {
        return h.response({ error: error.message }).code(400)
    }
}

const createcar_parkHandler = async (request, h) => {
    try {
        const arrival =  JSON.stringify(new Date());
        const { no_registrasi, departure, status, biaya } = request.payload;
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
    } catch (error) {
        return h.response({
            error: error.message
        }).code(400)
    }
}

const updatecar_parkHandler = async (request, h) => {
    try {
        const car_park_id = request.params.id;
        const { title, description } = request.payload;
        const car_park = await Models.car_park.update({
            title: title,
            description: description
        }, {
                where: {
                    id: car_park_id
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
    { method: 'POST', path: '/car_park', handler: createcar_parkHandler },
    { method: 'PUT', path: '/car_park/{id}', handler: updatecar_parkHandler },
    { method: 'DELETE', path: '/car_park/{id}', handler: deletecar_parkHandler }
];