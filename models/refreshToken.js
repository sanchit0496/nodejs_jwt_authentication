const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const AppUser = require('./appUsers');

const RefreshToken = sequelize.define('RefreshToken', {
    token: DataTypes.STRING,
    expiryDate: DataTypes.DATE,
});

// Define relationships

module.exports = RefreshToken;
