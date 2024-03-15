const User = require("./../models/User");

const lastVoteTime = async (req, res, next) => {
  const user = await User.findById(req.user.id, "lastVoteTime");
  if ((new Date() - user.lastVoteTime) / 60000 < 60) {
    res.status(429).send("You can vote once in an hour");
  }
  next();
};

module.exports = lastVoteTime;
