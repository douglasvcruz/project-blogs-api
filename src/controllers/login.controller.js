const { loginServices } = require('../services');

const loginAuthorization = async (req, res, next) => {
  try {
    const { email } = req.body;
    const token = await loginServices.loginAuthorization(email);
    res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  loginAuthorization,
};