const {
  getAllFavs,
  getSingleListFav,
  createNewFavList,
  createSingleFav,
  findFavListAndUpdate,
  deleteFav,
} = require('./favs.services');

/**
 * @openapi
 * /api/favs:
 *  get:
 *   tags:
 *   - Favs
 *   security:
 *   - bearerAuth: []
 *   description: Get all favs
 *   responses:
 *     200:
 *      description: An array with all favs , could be an empty array if there are no lists
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/allFavsListResponse'
 *     401:
 *      description: unauthorized
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/unauthorized'
 *     500:
 *      description: Server error
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/serverError'
 */


async function getAllFavsHandler(req, res) {
  try {
    const favs = await getAllFavs();
    return res.status(200).json(favs);
  }catch (error) {
    console.log("ERROR SERVER RESPONSE: ", error);
    return res.status(500).json({error});
  }
}

/**
 * @openapi
 * /api/favs/{id}:
 *  get:
 *    tags:
 *    - Favs
 *    security:
 *    - bearerAuth: []
 *    description: Get a single fav
 *    responses:
 *     200:
 *      description: A single fav
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/singleFavsListResponse'
 *     401:
 *      description: unauthorized
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/unauthorized'
 *     404:
 *      description: favs list not found
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/favListNotFound'
 *     500:
 *      description: Server error
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/serverError'
 */


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

/**
 * @openapi
 * /api/favs/:
 *  post:
 *    tags:
 *    - Favs
 *    security:
 *    - bearerAuth: String
 *    description: Post a new favs list
 *    requestBody:
 *     description: Object with a favs list of the user
 *     required: true
 *     content:
 *       application/json:
 *          schema:
 *            type: array
 *            items:
 *              $ref: '#/components/BodyRequest/favsListRequest'
 *    responses:
 *     200:
 *      description: created a favs List successfully
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/singleFavsListResponse'
 *     401:
 *      description: unauthorized
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/unauthorized'
 *     500:
 *      description: Server error
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/serverError'
 *     501:
 *      description: Not Implemented, name of list must be unique, change name to a new one.
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/NotImplemented'
 */

async function createFavListHandler (req, res) {
  const FavData = req.body;
  const { _id } = req.user;
  console.log(FavData);
  try {
    const fav = await createNewFavList({...FavData, creator: _id});
    return res.status(201).json(fav);
  } catch (error) {
    console.log('ERROR:', error);
    return res.status(501).json({ error })
  }
}

/**
 * @openapi
 * /api/favs/{id}:
 *  delete:
 *    tags:
 *    - Favs
 *    security:
 *    - bearerAuth: String
 *    description: Delete a Favlist
 *    parameters:
 *      name: id
 *      description: Id of favlist to delete
 *    responses:
 *     200:
 *      description: favlist deleted
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/FavsSchema'
 *     401:
 *      description: unauthorized
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/unauthorized'
 *     404:
 *      description: fav list to delete not found
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/favListNotFound'
 *     500:
 *      description: Server error
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/serverError'
 */

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
  createFavListHandler,
  deleteFavHandler,
}
