const Sequelize = require('sequelize');

const PASSWORD_DB = process.env.PASSWORD

const sequelize = new Sequelize('taskmanager', 'root', PASSWORD_DB, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize;

db.projects = require('../models/Projects')(sequelize, Sequelize);

module.exports = db;
