const User = require('./users.model');

function getAllUsers() {
  return User.find({});
}

function findUserByEmail(email) {
  return User.findOne({ email });
}

function createUser(user) {
  return User.create(user)
}

module.exports = {
  getAllUsers,
  findUserByEmail,
  createUser,
};
