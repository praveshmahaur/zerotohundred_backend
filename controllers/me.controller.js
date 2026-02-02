exports.getMe = (req, res) => {
  return res.status(200).json({
    success: true,
    firebase: req.user,
    user: req.dbUser,
  });
};
