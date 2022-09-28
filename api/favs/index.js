const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.service');

const {
  getAllFavsHandler,
  getSingleFavHandler,
  createFavListHandler,
  createFavOnList,
  deleteFavHandler,
} = require('./favs.controller');

const router = Router();

router.get('/',	isAuthenticated, getAllFavsHandler);
router.get('/:_id', isAuthenticated, getSingleFavHandler);
router.post('/', isAuthenticated, createFavListHandler);
router.post('/:idFavsList/fav', isAuthenticated, createFavOnList);
router.delete('/:id', isAuthenticated, deleteFavHandler);

module.exports = router;
