const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Make sure this points to your actual database configuration file

const Notes = sequelize.define('Notes', {
    notesId: {
        type: Sequelize.STRING(36),
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
    note: {
        type: Sequelize.TEXT,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    subchapterUUID: {
        type: Sequelize.STRING(36),
        allowNull: false
    }
}, {
    // Sequelize options
    tableName: 'notes',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
});

module.exports = Notes;
