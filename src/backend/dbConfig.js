const pgp = require('pg-promise')();

const config = {
    host: 'localhost',
    port: 5432,
    database: 'ecommerce_db',
    user: 'your_username',
    password: 'your_password'
};

const db = pgp(config);

module.exports = db;
