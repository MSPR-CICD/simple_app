const { findAllClients } = require('./clients.controller');

const registerClientsRoutes = server => {
  server.route({
    method: 'GET',
    path: '/clients',
    options: {
      description: 'Get all clients',
      notes: 'return a list of all clients',
    },
    handler: async () => {
      return await findAllClients();
    },
  });
};

module.exports = {
  registerClientsRoutes,
};
