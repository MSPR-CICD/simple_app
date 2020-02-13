const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const package = require('../package');
const { expectedEnv, config } = require('./config');
const { checkMissingEnvVariables } = require('./env-check');

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
  .then(() => {})
  .then(() => {
    server.start();
  })
  .then(() => console.log(`Server running on ${server.info.uri}`));
