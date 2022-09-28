const Favs = require('./favs.model');

function getAllFavs() {
  return Favs.find({});
}

function getSingleListFav(id){
  return Favs.findById(id);
}

function createNewFavList(newFavList) {
  return Favs.create(newFavList);
}

function deleteFav(id) {
  return Favs.findByIdAndRemove(id);
}

module.exports = {
  getAllFavs,
  createNewFavList,
  getSingleListFav,
  deleteFav,
};
