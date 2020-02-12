const expectedEnvVariables = [{ name: 'PORT', default: '3000' }];

const getEnvDefaultValue = (entries, varName) => {
  return entries.find(env => env.name === varName).default;
};

const config = {
  port: process.env.PORT || getEnvDefaultValue(expectedEnvVariables, 'PORT'),
};

module.exports = {
  expectedEnvVariables,
  config,
};
