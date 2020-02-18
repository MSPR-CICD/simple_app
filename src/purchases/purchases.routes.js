const { findAllPurchases } = require('./purchases.controller');

const registerPurchasesRoutes = server => {
  server.route({
    method: 'GET',
    path: '/purchases',
    options: {
      description: 'Get all purchases',
      notes: 'return a list of all purchases made by all clients',
      tags: ['api'],
    },
    handler: async () => {
      return [];
    },
  });
};

module.exports = {
  registerPurchasesRoutes,
};
