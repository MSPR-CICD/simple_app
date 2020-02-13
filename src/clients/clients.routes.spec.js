const { initServer } = require('../server');

describe('GET /clients', () => {
  let server;

  beforeEach(async () => {
    server = await initServer();
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
