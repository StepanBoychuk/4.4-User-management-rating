const User = require("./../models/User.js");

const getUser = async (userID) => {
  let user = await User.findById(userID, "username firstName lastName updatedAt rating");
  user.rating = user.rating.upVotes.length - user.rating.downVotes.length
  return user
};

module.exports = getUser;
