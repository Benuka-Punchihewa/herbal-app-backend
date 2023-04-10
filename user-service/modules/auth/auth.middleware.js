const authorize = (roleArr) => {
  if (!roleArr) roleArr = [];
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    
  };
};

module.exports = { authorize };
