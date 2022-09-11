const {
  getAllFavs,
  getSingleListFav,
  createFav,
  deleteFav,
} = require('./favs.services');


async function getAllFavsHandler(req, res) {
  try {
    const favs = await getAllFavs();
    return res.status(200).json(favs);
  }catch (error) {
    console.log("ERROR SERVER RESPONSE: ", error);
    return res.status(500).json({error});
  }
}

async function getSingleFavHandler (req, res) {
  const { id } = req.params;
  try {
    const fav = await getSingleListFav(id);

    if (!fav) {
      return res.status(404).json({message: 'Fav List not found'});
    }

    return res.json (fav);
  } catch (error) {
    return res.status(500).json({error});
  }
}

async function createFavHandler (req, res) {
  const FavData = req.body;
  const { _id } = req.user;
  console.log(FavData);
  try {
    const fav = await createFav({...FavData, creator: _id});
    return res.status(201).json(fav);
  } catch (error) {
    console.log('ERROR:', error);
    return res.status(501).json({ error })
  }
}

async function deleteFavHandler(req, res) {
  const { id } = req.params;
  try {
    const fav = await deleteFav(id);

    if (!fav) {
      return res.status(400).json({ message: 'Fav list not found'});
    }
    return res.json(fav);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  getAllFavsHandler,
  getSingleFavHandler,
  createFavHandler,
  deleteFavHandler,
}
