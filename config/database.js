const Sequelize = require('sequelize');
require('dotenv').config();

const RDS_PORT = process.env.RDS_PORT 
const RDS_HOSTNAME = process.env.RDS_HOSTNAME 
const RDS_PASSWORD = process.env.RDS_PASSWORD || ""
const RDS_USERNAME = process.env.RDS_USERNAME
const RDS_DB_NAME = process.env.RDS_DB_NAME; // Make sure to add this to your environment variables

const sequelize = new Sequelize(RDS_DB_NAME, RDS_USERNAME, RDS_PASSWORD, {
    host: RDS_HOSTNAME,
    dialect: 'mysql', // or another dialect if you're not using MySQL
});

module.exports = sequelize;
