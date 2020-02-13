const Hapi = require('@hapi/hapi');
const { registerClientsRoutes } = require('./clients.routes');

describe('GET /users', () => {
  let server;

  beforeEach(() => {
    server = Hapi.server({
      port: process.env.port,
    });
    registerClientsRoutes(server);
    server.start();
  });

  afterEach(async () => {
    await server.stop();
  });

  it('returns a list of all users', async () => {
    const res = await server.inject({ method: 'GET', url: '/clients' });
    expect(res.statusCode).toEqual(200);
    const body = JSON.parse(res.payload);
    expect(body.length).toEqual(3);
  });
});
