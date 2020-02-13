const { expectedEnv } = require('./config');
const { checkMissingEnvVariables } = require('./env-check');
const { initServer } = require('./server');

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

checkMissingEnvVariables(expectedEnv);

initServer().then(async server => {
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
});
