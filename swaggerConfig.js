// swaggerConfig.js

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Users Service API',
      version: '1.0.0',
      description: 'A Users Microservice API documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Replace with your server's URL and port
        description: 'Development server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API docs
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerSpec, swaggerUi };
