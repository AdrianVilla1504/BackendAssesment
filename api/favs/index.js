const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.service');

const {
  getAllFavsHandler,
  getSingleFavHandler,
  createFavHandler,
  deleteFavHandler,
} = require('./favs.controller');

const router = Router();

router.get('/',	isAuthenticated, getAllFavsHandler);
router.get('/:id', isAuthenticated, getSingleFavHandler);
router.post('/', isAuthenticated, createFavHandler);
router.delete('/:id', isAuthenticated, deleteFavHandler);

module.exports = router;
