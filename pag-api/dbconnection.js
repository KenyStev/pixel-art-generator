const pgp = require('pg-promise')();
const db = pgp(process.env.DB_CONNECTION || "postgres://postgres:pa4sswo0rdb@localhost:5432/pixelart_db");

db.any("SELECT * FROM images")
    .then(function (data) {
        console.log("DATA:", data);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });

module.exports = db;
