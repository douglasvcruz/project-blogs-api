const { Category } = require('../models');

const createCategory = (name) => {
  const category = Category.create({ name });
  return category;
};

module.exports = {
  createCategory,
};