const { User } = require('../models');
const httpErrGenerator = require('../utils/httpErrGenerator');

const validateUser = async (req, _res, next) => {
  const { displayName, email, password } = req.body;
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const user = await User.findOne({ where: { email } });

  if (displayName.length < 8) {
    throw httpErrGenerator(400, '"displayName" length must be at least 8 characters long');
  }
  if (!regex.test(email)) {
    throw httpErrGenerator(400, '"email" must be a valid email');
  }
  if (password.length < 6) {
    throw httpErrGenerator(400, '"password" length must be at least 6 characters long');
  }
  if (user) {
    throw httpErrGenerator(409, 'User already registered');
  }
  next();
};

module.exports = validateUser;