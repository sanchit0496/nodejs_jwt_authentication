const express = require('express');
const app = express();
const logger = require("./logger"); // Make sure the path is correct
const userRoutes = require('./routes/appUserRoutes');
const progressRoutes = require('./routes/progressRoutes')
const subchapterReadRoutes = require('./routes/subChapterReadRoutes')
const notesRoutes = require('./routes/notesRoutes')
const likesRoutes = require('./routes/likesRoutes')
const chaptersRoutes = require('./routes/chaptersRoutes')
const subchapterRoutes = require('./routes/subChaptersRoutes')
const { swaggerSpec, swaggerUi } = require('./swaggerConfig'); // Adjust the path if necessary

app.use(express.json()); // For parsing application/json

// Swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res, next) => {    
    // Log the request method and URL
    logger.info(`Incoming request: ${req.method} ${req.url} Body: ${JSON.stringify(req.body)}`);
    next();
});

// Use the user routes for any requests to '/users'
app.use('/appusers', userRoutes);
app.use('/progress', progressRoutes);
app.use('/subchapterread', subchapterReadRoutes);
app.use('/notes', notesRoutes)
app.use('/likes', likesRoutes)
app.use('/chapters', chaptersRoutes)
app.use('/subchapters', subchapterRoutes)
// Export the app for use in index.js
module.exports = app;
