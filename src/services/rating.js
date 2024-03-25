const User = require("./../models/User.js");
const Vote = require("./../models/Vote.js");

const setVoteTime = async (userID) => {
  await User.findByIdAndUpdate(userID, {
    lastVoteTime: new Date().toUTCString(),
  });
};

const vote = async (userID, targetID, voteType) => {
  const vote = await Vote.findOne({ user: userID, targetUser: targetID });
  if (!vote) {
    const newVote = new Vote({
      user: userID,
      targetUser: targetID,
      voteType: voteType,
    });
    await setVoteTime(userID);
    return await newVote.save();
  }
  if (vote.voteType == voteType) {
    await setVoteTime(userID);
    return await Vote.deleteOne({ _id: vote.id });
  }
  vote.voteType = voteType;
  await setVoteTime(userID);
  return await vote.save();
};

module.exports = vote;
