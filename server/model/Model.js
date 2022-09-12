const bd = require(__basedir + '/bdConfig')
const sqlQuery = (sql, res, option = []) => {
    bd.query(sql, option, (err, result) => {
        if (err) console.log("tralalala",err);
        res.json(result)
    });
}

module.exports = sqlQuery;

// function sqlQuery(sql, option = [], res, req = null) {
//     bd.query(sql, option, (err, result) => {
//         if (err) console.log(err);
//         res.send(result);
//     });
// }