const userServices = require('../services');
const { generateToken } = require('../utils/auth');

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await userServices.createUser(displayName, email, password, image);
    delete user.dataValues.password;
    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  createUser,
};