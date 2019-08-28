const pgp = require('pg-promise')();
const db = pgp(`postgres://postgres:pa4sswo0rdb@${process.env.DB_CONNECTION || 'localhost'}:5432/pixelart_db`);

db.any("SELECT * FROM images")
    .then(function (data) {
        console.log("DATA:", data);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    });

module.exports = db;
