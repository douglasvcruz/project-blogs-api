const jwt = require('jsonwebtoken');
const httpErrGenerator = require('../utils/httpErrGenerator');

const secretKey = process.env.JWT_SECRET;

const validateToken = (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw httpErrGenerator(401, 'Token not found');
  }

  try {
    const token = jwt.verify(authorization, secretKey);
    req.user = token;
    next();
  } catch (e) {
    if (e) {
      throw httpErrGenerator(401, 'Expired or invalid token');
    }
  }
};

module.exports = validateToken;