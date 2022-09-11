require('dotenv').config();
const express = require('express');

const expressConfiguration = require('./config/express');
const routes = require('./routes');
const DBconnection = require()

const app = express();

const PORT = process.env.PORT || 8080

app.listen(PORT, async () => {
  expressConfiguration(app);

  await DBconnection();

  routes(app);

  console.log(`The server is running on port http://localhost:${PORT}`);
})
