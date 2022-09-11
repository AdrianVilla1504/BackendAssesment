const User = require('./users.model');

function getAllUsers() {
  return User.find({});
}

function getSingleUser(id) {
  return User.findById(id);
}

function findUserByEmail(email) {
  return User.findOne({ email });
}

function createUser(user) {
  return User.create(user);
}

function deleteUser(id) {
  return User.findByIdAndRemove(id);
}

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  findUserByEmail,
};
