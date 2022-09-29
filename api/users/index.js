const Router = require('express');
const { validateUser } = require('./users.joischema');

const {
  getAllUsersHandler,
  createUserHandler,
} = require('./users.controllers');

const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', validateUser, createUserHandler);

module.exports = router;
