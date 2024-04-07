const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Make sure this points to your actual database configuration file
const Progress = require('./Progress'); // Ensure this path points to your Progress model

const SubchapterRead = sequelize.define('SubchapterRead', {
    readId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    progressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Progress,
            key: 'progressId'
        }
    },
    subchapterId: {
        type: Sequelize.STRING(36),
        allowNull: false
    }
}, {
    // Sequelize options
    tableName: 'subchapterRead',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
});

module.exports = SubchapterRead;
