const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Make sure this points to your actual database configuration file

const AppUser = sequelize.define('AppUser', {
    userId: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    mobile: {
        type: Sequelize.STRING,
        allowNull: true // Assuming that mobile is not required
    },
    displayPicture: {
        type: Sequelize.TEXT,
        allowNull: true // Assuming that display picture is not required
    }
}, {
    // Sequelize options
    tableName: 'appusers',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
});

module.exports = AppUser;
