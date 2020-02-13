const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const package = require('../package');
const { expectedEnv, config } = require('./config');
const { checkMissingEnvVariables } = require('./env-check');
const { registerClientsRoutes } = require('./clients/clients.routes');

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

checkMissingEnvVariables(expectedEnv);

const server = Hapi.server({
  host: 'localhost',
  port: config.port,
});

server
  .register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'Api specifications',
          version: package.version,
        },
      },
    },
  ])
  .then(() => {
    registerClientsRoutes(server);
  })
  .then(async () => await server.start())
  .then(() => console.log(`Server running on ${server.info.uri}`));
