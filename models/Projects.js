const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Projects = sequelize.define('projects', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: Sequelize.STRING,
            url: Sequelize.STRING
        });

module.exports = Projects;