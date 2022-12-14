exports.findAll = (table,option ="") => `SELECT * FROM ${table} ${option}`;
exports.find = (table) => `SELECT * FROM ${table} where id= ?`;
// exports.findBy = (table, field = []) => `SELECT * FROM ${table} ORDER BY RAND() LIMIT 20`;
// exports.insertCreate = ()