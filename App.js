'use strict';
const Hapi = require('@hapi/hapi');
const serverRoutes = require('./Routes');


const init = async () => {
    const server = Hapi.server({
            port: 3000,
            host: 'localhost'
    });
    
    // attach routes
    server.route(serverRoutes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
    
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();