const db = require('../db');
const { extractProductFromSqlResult } = require('../product/product.controller');

const findAllPurchases = async () => {
  const res = await db.query(`
    SELECT id_purchase, id_client, product.id_product, purchase.created_at, product.name, product.price, product.tax 
    FROM purchase, product
    WHERE purchase.id_product = product.id_product;
  `);
  return res.rows.map(row => {
    return {
      id_purchase: row.id_purchase,
      product: extractProductFromSqlResult(row),
      created_at: row.created_at,
    };
  });
};

const findAllPurchasesByClientId = async clientId => {
  const res = await db.query(
    `SELECT id_purchase, id_client, product.id_product, purchase.created_at, product.name, product.price, product.tax 
    FROM purchase, product 
    WHERE purchase.id_product = product.id_product 
    AND purchase.id_client = $1;`,
    [clientId],
  );
  return res.rows.map(row => {
    return {
      id_purchase: row.id_purchase,
      product: extractProductFromSqlResult(row),
      created_at: row.created_at,
    };
  });
};

module.exports = {
  findAllPurchases,
  findAllPurchasesByClientId,
};
