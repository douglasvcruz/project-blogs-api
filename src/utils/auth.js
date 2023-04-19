const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

const configJWT = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign(payload.dataValues, secretKey, configJWT);
  return token;
};

module.exports = {
  generateToken,
};