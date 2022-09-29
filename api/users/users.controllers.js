const crypto = require('crypto');
const {
  getAllUsers,
  findUserByEmail,
  createUser,
} = require('./users.services');

async function getAllUsersHandler(req, res) {
  try {
    const users = await getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error(`ERROR: ${error}`)
    return res.status(500).json({ error });
  }
}

async function getUserByEmailHandler(req, res) {
  const { user } = req;
  const result = await findUserByEmail(user.email);
  return res.json(result);
}

async function createUserHandler(req, res) {
  const userData = req.body;

  try {
    const hash = crypto.createHash('sha256')
      .update(userData.email)
      .digest('hex');

    userData.passwordResetToken = hash;
    userData.passwordResetExpires = Date.now() + 3_600_000 * 24;
    const user = await createUser(userData);
    return res.status(201).json(user);
  } catch (error) {
    console.error(`ERROR: ${error}`);
    return res.status(500).json({ error: error.message });
  }
}
module.exports = {
  getAllUsersHandler,
  getUserByEmailHandler,
  createUserHandler,
};
