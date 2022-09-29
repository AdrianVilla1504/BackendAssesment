require('dotenv').config();
const mongoose = require('mongoose');

async function mongoDBconnection() {
  const URI = process.env.URI;
  try {
    await mongoose.connect(URI);
    console.log('Succesfully connected to URI: ', URI);
  } catch (error) {
    console.log('Error, FAILED to connect with URI. ERROR MESSAGE: ', error);
    process.exit(1);
  }
}

module.exports = mongoDBconnection;
