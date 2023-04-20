const { categoryServices } = require('../services');

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = await categoryServices.createCategory(name);
    res.status(201).json(category);
  } catch (e) {
    next(e);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const categories = await categoryServices.getAll();
    res.status(200).json(categories);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createCategory,
  getAll,
};