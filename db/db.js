const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('first_schema','root',process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;