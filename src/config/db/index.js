// getting-started.js
const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/IT-Education');
    console.log('successfully')
  }
  catch (error) {
    console.log('error');
  }
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = { connect }