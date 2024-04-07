const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Make sure this points to your actual database configuration file
const Chapters = require('./Chapters'); // Ensure this path points to your Chapters model

const Subchapters = sequelize.define('Subchapters', {
    subchapterId: {
        type: Sequelize.STRING(36),
        allowNull: false,
        primaryKey: true
    },
    chapterId: {
        type: Sequelize.STRING(36),
        allowNull: false,
        references: {
            model: Chapters,
            key: 'chapterId'
        }
    },
    subChapterContentEnglish: {
        type: Sequelize.TEXT('long'),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    subChapterContentHindi: {
        type: Sequelize.TEXT('long'),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    subChapterContentSanskrit: {
        type: Sequelize.TEXT('long'),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    }
}, {
    // Sequelize options
    tableName: 'subchapters',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
});

module.exports = Subchapters;
