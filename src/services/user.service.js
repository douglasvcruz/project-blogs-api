const { User } = require('../models');

const createUser = (displayName, email, password, image) => {
  const user = User.create({ displayName, email, password, image });
  return user;
};

module.exports = {
  createUser,
};