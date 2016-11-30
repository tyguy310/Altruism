const jwt = require('jwt-simple');
const expressjwt = require('express-jwt');

const secret = process.env.SECRET_KEY;
const authenticate = expressjwt({secret: secret});

function encodeToken (user) {
  return jwt.sign({user: user.id}, secret, { expiresIn: '1h' });
}

module.exports = {
  encodeToken
};
