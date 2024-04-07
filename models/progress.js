const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Make sure this points to your actual database configuration file

const Progress = sequelize.define('Progress', {
    progressId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
            model: 'appusers', // Reference the correct model name (replace with your actual AppUser model name)
            key: 'userId'
        }
    },
    chapterUUID: {
        type: Sequelize.UUID,
        allowNull: false
    }
}, {
    // Sequelize options
    tableName: 'progress',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
});

module.exports = Progress;
