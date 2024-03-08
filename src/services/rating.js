const User = require("./../models/User.js");

const setVoteTime = async (userID) => {
  await User.findByIdAndUpdate(userID, {
    lastVoteTime: new Date().toUTCString(),
  });
};

const upVote = async (userID, voteID) => {
  const user = await User.findById(voteID, "rating");
  const upIndex = user.rating.upVotes.indexOf(userID);
  const downIndex = user.rating.downVotes.indexOf(userID);
  if (upIndex != -1) {
    user.rating.upVotes.splice(upIndex, 1);
    await setVoteTime(userID)
    return await user.save();
  }
  if (downIndex != -1) {
    user.rating.downVotes.splice(downIndex, 1);
  }
  await setVoteTime(userID)
  user.rating.upVotes.push(userID);
  await user.save();
};

const downVote = async (userID, voteID) => {
  const user = await User.findById(voteID, "rating");
  const upIndex = user.rating.upVotes.indexOf(userID);
  const downIndex = user.rating.downVotes.indexOf(userID);
  if (downIndex != -1) {
    user.rating.downVotes.splice(downIndex, 1);
    await setVoteTime(userID)
    return await user.save();
  }
  if (upIndex != -1) {
    user.rating.upVotes.splice(upIndex, 1);
  }
  user.rating.downVotes.push(userID);
  await setVoteTime(userID)
  await user.save();
};

module.exports = { upVote, downVote };
