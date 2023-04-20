const httpErrGenerator = require('../utils/httpErrGenerator');

const validateCategory = (req, _res, next) => {
  const { name } = req.body;
  if (!name) {
    throw httpErrGenerator(400, '"name" is required');
  }
  next();
};

module.exports = validateCategory;