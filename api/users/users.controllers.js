const crypto = require('crypto');
const {
  getAllUsers,
  getSingleUser,
  findUserByEmail,
  createUser,
  deleteUser,
} = require('./users.services');

async function getAllUsersHandler(_, res) {
  try {
    const user = await getAllUsers();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getSingleUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await getSingleUser(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { profile } = user;

    return res.json(profile);
  } catch (error) {
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
    return res.status(500).json({ error: error.message });
  }
}

async function deleteUserHandler(req, res) {
  const { id } = req.params;
  try {
    const user = await deleteUser(id);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  getAllUsersHandler,
  getSingleUserHandler,
  getUserByEmailHandler,
  createUserHandler,
  deleteUserHandler,
};
