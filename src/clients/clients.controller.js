const db = require('../db');

const findAllClients = async () => {
  const res = await db.query('SELECT * FROM client;');
  return res.rows;
};

module.exports = {
  findAllClients,
};
