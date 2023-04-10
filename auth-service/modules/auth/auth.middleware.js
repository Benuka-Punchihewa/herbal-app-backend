const AuthUtil = require("./auth.util");

const authorize = (roleArr) => {
  if (!roleArr) roleArr = [];
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    const returnBody = AuthUtil.authorize(authHeader, roleArr);
    req.auth = returnBody;
    next();
  };
};

module.exports = { authorize };
