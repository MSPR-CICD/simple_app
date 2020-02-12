const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const package = require('../package');

const server = Hapi.server({
  host: 'localhost',
  port: 3000
});


const swaggerOptions = {
  info: {
    title: 'Api specification',
    version: package.version,
  },
};

server.register([
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: swaggerOptions
  }
]).then(() => {
}).then(() => {
  server.start()
}).then(() => console.log(`Server running on ${server.info.uri}`))

