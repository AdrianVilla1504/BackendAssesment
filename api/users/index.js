const Router = require('express');
const { validateUser } = require('./users.joischema');

const {
  getAllUsersHandler,
  getSingleUserHandler,
  createUserHandler,
  deleteUserHandler,
} = require('./users.controllers');

const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', validateUser, createUserHandler);
router.get('/:id', getSingleUserHandler);
router.delete('/:id', deleteUserHandler);

module.exports = router;
