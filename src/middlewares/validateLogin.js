const { User } = require('../models');
const httpErrGenerator = require('../utils/httpErrGenerator');

const validateLogin = async (req, _res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!email || !password) {
    throw httpErrGenerator(400, 'Some required fields are missing');
  }
  if (!user || user.password !== password) {
    throw httpErrGenerator(400, 'Invalid fields');
  }
  next();
};

module.exports = {
  validateLogin,
};