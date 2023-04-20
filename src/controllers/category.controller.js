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

module.exports = {
  createCategory,
};