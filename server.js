require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT;

const URI = process.env.MONGO_DB_URI


mongoose.connect(URI)
  .then(() => console.log('Connected to MongoDB Database'))
  .catch(err => console.log('Could not connect to MongoDB...', err));


const stockSchema = new mongoose.Schema({
    company: String, 
    description: String,
    initial_price: String,
    price_2002: Number, 
    price_2007: Number, 
    symbol: String
});

const Stock = mongoose.model("Stock", stockSchema);




app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);

