module.exports.isUserAuthenticated = (req, res, next) => {
  console.log(" user from varification: " +req.user)
  console.log(" req from varification: " +JSON.stringify(req))
  if (req.user) {
    next();
  } else {
    res.status(401).send("You must login first!");
  }
};