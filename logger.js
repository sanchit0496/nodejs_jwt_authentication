const winston = require('winston');
require('winston-daily-rotate-file');

const logConfiguration = {
    transports: [
        new winston.transports.DailyRotateFile({
            filename: './logs/application-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
        })
    ],
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    )
};

const logger = winston.createLogger(logConfiguration);

module.exports = logger;
