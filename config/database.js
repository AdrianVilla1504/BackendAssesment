require('dotenv').config();

function mongoDBconnection() {
  const URI =process.env.URI;
  try {
    console.log('succesfully connected to URI: ', URI);
  } catch (error) {
    console.error('Error, FAILED to connect with URI. ERROR MESSAGE: ', error);
    process.exit(1);
  }
}

module.exports = mongoDBconnection;
