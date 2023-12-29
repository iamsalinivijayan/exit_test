const express = require('express');
// importing cors
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDb = require('./config/connection')
const listController = require('./controllers/listController');
const aboutController = require('./controllers/aboutController');

// importing and configuring dotenv 
const dotenv = require('dotenv').config()

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Function call to connect server with db
connectDb();

app.get('/', listController.getList);
app.post('/', listController.postList);

app.get('/about', aboutController.getAbout);

app.listen(PORT, function () {
  console.log(`Server is running at port ${PORT}`);
});
