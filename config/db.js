const { Sequelize } = require('sequelize');

const PASSWORD_DB = process.env.PASSWORD

const sequelize = new Sequelize('taskmanager', 'root', PASSWORD_DB, {
    host: 'localhost',
    dialect: 'mysql'
});

const connectDB = async () => { 
    try {
        await sequelize.authenticate();
        console.log('******* DATABASE CONNECTED **********');
    } catch (err) {
        console.error('====== DATABASE NOT CONNECTED ======', err);
    }
}

module.exports = {
    sequelize,
    connectDB
}
