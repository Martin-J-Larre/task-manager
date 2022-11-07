const Sequelize = require('sequelize');

const PASSWORD_DB = process.env.PASSWORD

const sequelize = new Sequelize('taskmanager', 'root', PASSWORD_DB, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;


