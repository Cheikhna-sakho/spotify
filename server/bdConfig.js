const mysql = require('mysql2');
const bd = mysql.createConnection({
    host: 'localhost',
    user: 'cheikh',
    password: 'CHei0101.',
    database: 'spotify',
    socketPath: '/var/run/mysqld/mysqld.sock'
})
bd.connect(function (err) {
    if (err) console.log(err);
    else console.log("Connecté à la base de données MySQL!");
});
module.exports = bd;