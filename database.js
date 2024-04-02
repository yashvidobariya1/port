const mongoose = require('mongoose');
require('dotenv').config();
const mongoString = process.env.MONGO_DB_URL;
mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((error) => {
        console.log('Failed to connect to the database:', error);
    });