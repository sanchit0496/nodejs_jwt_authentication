const Sequelize = require('sequelize');
require('dotenv').config();

const DB_HOST = process.env.DB_HOST || "localhost"; // Default to localhost if not specified
const DB_PORT = process.env.DB_PORT || 3306; // Default MySQL port is 3306
const DB_USERNAME = "root"; // Ensure this is set in your .env file
const DB_PASSWORD = process.env.DB_PASSWORD || ""; // Default to empty if not specified
const DB_NAME = "application"; // Ensure this is set in your .env file

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mysql', // or another dialect if you're not using MySQL
});


module.exports = sequelize;
