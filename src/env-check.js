/**
 * Will print missing env variables, and default value if they have one
 * Will throw an error if a missing env variable has no default value
 * @param {[{name: string, default?: string }]} expectedEnv list of all the variable to check
 * eg {name: PORT, default: '3000'}
 */
const checkMissingEnvVariables = expectedEnv => {
  const undefinedEnvVariables = expectedEnv.filter(env => {
    return !process.env[env.name];
  });

  console.log();
  let requiredEnvVarMissing = false;
  console.log('Missing environnement variables:');
  undefinedEnvVariables.forEach(env => {
    if (env.default) {
      console.log(`${env.name} \tusing default value ${env.default}`);
    } else {
      requiredEnvVarMissing = true;
      console.error(`${env.name} \t no default value, please define it`);
    }
  });
  console.log();

  if (requiredEnvVarMissing) throw { message: 'Missing environnement variables, see above output' };
};

module.exports = {
  checkMissingEnvVariables,
};
