const mysql = require('mysql2');
require('dotenv').config();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: process.env.DATABASE,
    port: process.env.PORT_DB,
    password: process.env.PASSWORD,
  });

  module.exports = connection