require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT;

const URI = process.env.MONGO_DB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
        });
        console.log('Database is connected');
    } catch (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

connectDB();



app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);

