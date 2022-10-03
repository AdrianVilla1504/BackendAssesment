const express = require('express');

const healthcheck = require('./api/healthcheck/index');
const favs = require('./api/favs/index');
const auth = require('./auth/local/index');
const users = require('./api/users/index')
const { isAuthenticated } = require('./auth/auth.service');

const router = express.Router();
router.use(express.json());

router.use('/api/healthcheck', healthcheck);
router.use('/api/favs', isAuthenticated, favs);
router.use('/auth/local', auth);
router.use('/api/users', users);

module.exports = router;
