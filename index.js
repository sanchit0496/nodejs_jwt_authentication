const app = require('./app');
const sequelize = require('./config/database');
require('dotenv').config();

const PORT = process.env.RDS_PORT || 3000;
console.log('process.env.RDS_PORT', process.env.RDS_PORT)


sequelize.sync({ alter: true }) // This will check what is the current state of the table in the database (which columns it has, what are their data types, etc), and then perform the necessary changes in the table to make it match the model.
    .then(() => {
        console.log('Database synced');
        // ... start your server here
        app.listen(PORT, () => {
            console.log(`Server running on RDS_PORT ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Error syncing database:', err);
    });
