exports.findAll = (table) => `SELECT * FROM ${table} ORDER BY RAND() LIMIT 20`;
exports.find = (table) => `SELECT * FROM ${table} where id= ?`;
// exports.findBy = (table, field = []) => `SELECT * FROM ${table} ORDER BY RAND() LIMIT 20`;
// exports.insertCreate = ()