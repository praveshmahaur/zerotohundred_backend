exports.getMe = (req, res) => {
  return res.status(200).json({
    firebase: req.user,
    user: req.dbUser,
  });
};
