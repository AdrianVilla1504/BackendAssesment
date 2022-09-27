const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.service');

const {
  getAllFavsHandler,
  getSingleFavHandler,
  createFavListHandler,
  deleteFavHandler,
} = require('./favs.controller');

const router = Router();

router.get('/',	isAuthenticated, getAllFavsHandler);
router.get('/:id', isAuthenticated, getSingleFavHandler);
router.post('/', isAuthenticated, createFavListHandler);
router.delete('/:id', isAuthenticated, deleteFavHandler);

module.exports = router;
