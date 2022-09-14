const Router = require('express');
const {
  getAllUsersHandler,
  getSingleUserHandler,
  createUserHandler,
  deleteUserHandler,
} = require('./users.controllers');

const router = Router();

router.get('/', getAllUsersHandler);
router.post('/', createUserHandler);
router.get('/:id', getSingleUserHandler);
router.delete('/:id', deleteUserHandler);

module.exports = router;
