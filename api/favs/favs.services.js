const Favs = require('./favs.model');

function getAllFavs() {
  return Favs.find({});
}

function getSingleListFav(id){
  return Favs.findById(id);
}

function createFav(fav) {
  return Favs.create(fav);
}

function deleteFav(id) {
  return Favs.findByIdAndRemove(id);
}

module.exports = {
  getAllFavs,
  getSingleListFav,
  createFav,
  deleteFav,
};
