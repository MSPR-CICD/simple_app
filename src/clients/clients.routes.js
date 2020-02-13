const { findAllClients } = require('./clients.controller');
const { findAllPurchasesByClientId } = require('../purchases/purchases.controller');
const Joi = require('@hapi/joi');

const registerClientsRoutes = server => {
  server.route({
    method: 'GET',
    path: '/clients',
    options: {
      description: 'Get all clients',
      notes: 'return a list of all clients',
      tags: ['api'],
    },
    handler: async () => {
      return await findAllClients();
    },
  });

  server.route({
    method: 'GET',
    path: '/clients/{id}/purchases',
    options: {
      description: 'Get all purchase of the given client',
      notes: 'return a list of all purchases made by the client specified in the url',
      tags: ['api'],
      validate: {
        params: Joi.object({
          id: Joi.string()
            .required()
            .uuid({ version: 'uuidv4' }),
        }),
      },
    },
    handler: async req => {
      return await findAllPurchasesByClientId(req.params.id);
    },
  });
};

module.exports = {
  registerClientsRoutes,
};
