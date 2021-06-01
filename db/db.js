const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'first_schema',
    password: process.env.DB_PASSWORD
})

module.exports = pool.promise();