const extractProductFromSqlResult = ({ id_product, name, price, tax }) => {
  return { id_product, name, price, tax };
};

module.exports = {
  extractProductFromSqlResult,
};
