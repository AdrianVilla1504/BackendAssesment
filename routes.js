const router = require('./api/healthcheck/index');
const favs = require('./api/favs/index');
const auth = require('./auth/local/index');
const users = require('./api/users/index')
const { isAuthenticated } = require('./auth/auth.service');

function routes(app) {
  app.use('/api/healthcheck', router);
  app.use('/api/favs', isAuthenticated, favs);
  app.use('/auth/local', auth);
  app.use('/api/users', users);

}

module.exports = routes;
