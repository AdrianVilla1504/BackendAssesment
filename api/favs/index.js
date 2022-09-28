const Router = require('express');
const { isAuthenticated } = require('../../auth/auth.service');

const {
  getAllFavsHandler,
  getSingleFavHandler,
  createFavListHandler,
  createNewFavOnList,
  deleteFavHandler,
} = require('./favs.controller');

const router = Router();

router.get('/',	isAuthenticated, getAllFavsHandler);
router.get('/:_id', isAuthenticated, getSingleFavHandler);
router.post('/', isAuthenticated, createFavListHandler);
router.patch('/updateList/:_id', isAuthenticated, createNewFavOnList);
router.delete('/:id', isAuthenticated, deleteFavHandler);

module.exports = router;
