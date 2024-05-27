const mysql = require("mysql2/promise");

require('dotenv').config()

const client = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
  multipleStatements: true
})

client.checkConnection = () => {
  client
    .getConnection()
    .then((connection) => {
      console.log(`Using database ${process.env.DB_NAME}`);

      connection.release();
    })
    .catch((error) => {
      console.warn(
        "Warning:",
        "Failed to establish a database connection.",
        "Please check your database credentials in the .env file if you need a database access."
      );
      console.warn(error.message);
    });
}

module.exports = client;