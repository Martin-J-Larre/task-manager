const Sequelize = require('sequelize');
const sequelize = require('../config/db');
const slug = require('slug');
const shortid = require('shortid');

const Projects = sequelize.define('projects', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: Sequelize.STRING,
            url: Sequelize.STRING
        }, {
            hooks: {
                beforeCreate(project) {
                    const url = slug(project.name).toLowerCase();

                    project.url = `${url}-${shortid.generate()}`;
                }
            }
        });

module.exports = Projects;