module.exports = (sequelize, Sequelize) => {
    const Projects = sequelize.define('projects', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING,
        url: Sequelize.STRING
    });
    return Projects;
}






// const { sequelize } = require('../config/db');
// const { DataTypes } = require('sequelize');

// const Projects = se.define('Projects', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//     },
//     name: DataTypes.STRING,
//     url: DataTypes.STRING
// });

// module.exports = Projects;