require('dotenv-flow').config();
const mysql = require('mysql2');
const env = process.env;
const bd = mysql.createConnection({
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: 'spotify',
    socketPath: '/var/run/mysqld/mysqld.sock'
})
bd.connect(function (err) {
    if (err) console.log(err);
    else console.log("Connecté à la base de données MySQL!");
});
module.exports = bd;