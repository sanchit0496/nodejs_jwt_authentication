const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Make sure this points to your actual database configuration file

const Likes = sequelize.define('Likes', {
    likeId: {
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
    chapterId: {
        type: Sequelize.STRING(36),
        allowNull: false
    },
    subchapterId: {
        type: Sequelize.STRING(36),
        allowNull: false
    },
    timestamp: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
}, {
    // Sequelize options
    tableName: 'likes',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
});

module.exports = Likes;
