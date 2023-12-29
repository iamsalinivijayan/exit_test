// models/dateModel.js
const mongoose = require('mongoose')

const getDate = function() {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };


  // Creating a model and then exporting
module.exports = mongoose.model("getDate", getDate)