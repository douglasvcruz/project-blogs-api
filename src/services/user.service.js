const { User } = require('../models');

const createUser = (displayName, email, password, image) => {
  const user = User.create({ displayName, email, password, image });
  return user;
};

const getAll = () => {
  const users = User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

const getById = (id) => {
  const user = User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });
  return user;
};

module.exports = {
  createUser,
  getAll,
  getById,
};