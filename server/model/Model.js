const bd = require(__basedir + '/bdConfig')
const sqlQuery = (sql, res, option = []) => {
    bd.query(sql, option, (err, result) => {
        if (err) console.log("error => ",err);
        res.json(result)
    });
}

module.exports = sqlQuery;
