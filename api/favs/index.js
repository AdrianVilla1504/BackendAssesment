const Router = require('express');

const {
  getAllFavsHandler,
  getSingleFavHandler,
  createFavHandler,
  deleteFavHandler,
} = require('./favs.controller');

const router = Router();

router.get('/', getAllFavsHandler);
router.get('/:id', getSingleFavHandler);
router.post('/', createFavHandler);
router.delete('/:id', deleteFavHandler);

module.exports = router;
