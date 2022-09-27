const { Favs, singleFav } = require('./favs.model');

function getAllFavs() {
  return Favs.find({});
}

function getSingleListFav(id){
  return Favs.findById(id);
}

function createNewFavList(newFavList) {
  return Favs.create(newFavList);
}

function createSingleFav(singleFavtoList){
  return singleFav.create(singleFavtoList);
}

function findFavListAndUpdate(_id, singlefav ){
  return Favs.findByIdAndUpdate(_id, favList, { new: true });

  }

function deleteFav(id) {
  return Favs.findByIdAndRemove(id);
}

module.exports = {
  getAllFavs,
  getSingleListFav,
  createNewFavList,
  createSingleFav,
  findFavListAndUpdate,
  deleteFav,
};
