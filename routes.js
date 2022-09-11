const router = require('./api/healthcheck/index');
const favs = require('.api/favs/index');

function routes(app) {
  app.use('/api/healthcheck', router);
  app.use('/api/favs', fav);

}

module.exports = routes;
