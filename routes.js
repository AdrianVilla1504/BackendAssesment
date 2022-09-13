const router = require('./api/healthcheck/index');
const favs = require('./api/favs/index');
const auth = require('./auth/local/index');

function routes(app) {
  app.use('/api/healthcheck', router);
  app.use('/api/favs', favs);
  app.use('/auth/local', auth);

}

module.exports = routes;
