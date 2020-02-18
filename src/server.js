const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const pack = require('../package');
const { config } = require('./config');
const { registerClientsRoutes } = require('./clients/clients.routes');
const { registerPurchasesRoutes } = require('./purchases/purchases.routes');

const initServer = async () => {
  console.log(package); //TMP
  const server = Hapi.server({
    port: config.port,
  });

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'Api specifications',
          version: pack.version,
        },
      },
    },
  ]);

  registerClientsRoutes(server);
  registerPurchasesRoutes(server);

  return server;
};

module.exports = {
  initServer,
};
