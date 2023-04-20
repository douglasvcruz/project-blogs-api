const { Category } = require('../models');

const createCategory = (name) => {
  const category = Category.create({ name });
  return category;
};

const getAll = () => {
  const categories = Category.findAll();
  return categories;
};

module.exports = {
  createCategory,
  getAll,
};