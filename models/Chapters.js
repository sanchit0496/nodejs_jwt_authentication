const Sequelize = require('sequelize');
const sequelize = require('../config/database'); // Make sure this points to your actual database configuration file

const Chapters = sequelize.define('Chapters', {
    chapterId: {
        type: Sequelize.STRING(36),
        allowNull: false,
        primaryKey: true
    },
    chapterNumber: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    chapterTitleSanskrit: {
        type: Sequelize.TEXT('long'),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    chapterTitleHindi: {
        type: Sequelize.TEXT('long'),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    chapterTitleEnglish: {
        type: Sequelize.TEXT('long'),
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
        allowNull: false
    },
    totalSubchapters: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {
    // Sequelize options
    tableName: 'chapters',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
});

module.exports = Chapters;
