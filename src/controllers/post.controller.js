const { postServices } = require('../services');

const getAll = async (_req, res, next) => {
  try {
    const posts = await postServices.getAll();
    res.status(200).json(posts);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
};