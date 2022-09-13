require('dotenv').config();
const mongoose = require('mongoose');

function mongoDBconnection() {
  const URI = process.env.URI;
  try {
    mongoose.connect(URI);
    console.log('Succesfully connected to URI: ', URI);
  } catch (error) {
    console.error('Error, FAILED to connect with URI. ERROR MESSAGE: ', error);
    process.exit(1);
  }
}

module.exports = mongoDBconnection;
