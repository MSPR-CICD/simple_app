const expectedEnv = [
  { name: 'PORT', default: '3000' },
  { name: 'DB_USER', default: 'postgres' },
  { name: 'DB_PASSWORD' },
  { name: 'DB_HOST' },
  { name: 'DB_PORT' },
  { name: 'DB_NAME' },
];

const getDefault = (entries, varName) => {
  return entries.find(env => env.name === varName).default;
};

const getEnv = name => {
  return process.env[name] || getDefault(expectedEnv, name);
};

const config = {
  port: getEnv('PORT'),
  db: {
    user: getEnv('DB_USER'),
    password: getEnv('DB_PASSWORD'),
    host: getEnv('DB_HOST'),
    port: getEnv('DB_PORT'),
    name: getEnv('DB_NAME'),
  },
};

module.exports = {
  expectedEnv,
  config,
};
