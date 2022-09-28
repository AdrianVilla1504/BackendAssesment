const Router = require('express');

const {
  getAllFavsHandler,
  getSingleFavHandler,
  createFavListHandler,
  createFavOnList,
  deleteFavHandler,
} = require('./favs.controller');

const router = Router();

router.get('/', getAllFavsHandler);
router.get('/:_id', getSingleFavHandler);
router.post('/', createFavListHandler);
router.post('/:idFavsList/fav', createFavOnList);
router.delete('/:id', deleteFavHandler);

module.exports = router;
