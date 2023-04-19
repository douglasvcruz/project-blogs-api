const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const loginAuthorization = async (email) => {
  const user = await User.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
  });
  const token = generateToken(user);
  return token;
};

module.exports = {
  loginAuthorization,
};
