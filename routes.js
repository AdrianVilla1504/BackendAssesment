const router = require('./api/healthcheck/index');
const fav = require('.api/favs/index');
const auth = require('./auth/local');

function routes(app) {
  app.use('/api/healthcheck', router);
  app.use('/api/favs', fav);
  app.use('/auth/local', auth);

}

module.exports = routes;
