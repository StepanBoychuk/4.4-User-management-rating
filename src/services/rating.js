const User = require("./../models/User.js");
const Vote = require('./../models/Vote.js')

const setVoteTime = async (userID) => {
  await User.findByIdAndUpdate(userID, {
    lastVoteTime: new Date().toUTCString(),
  });
};

// const changeRating = async (targetID, number) => {
//   let targetUser = await User.findById(targetID, "rating")
//   targetUser.rating = Number(targetUser.rating) + Number(number)
//   await targetUser.save()
// }

const upVote = async (userID, targetID) => {
  let vote = await Vote.findOne({user: userID, targetUser:targetID})
  if (!vote){
    const newVote = new Vote({
      user: userID,
      targetUser: targetID,
      voteType: "upvote"
    })
    await setVoteTime(userID)
    return await newVote.save()
  }
  if (vote.voteType == "upvote") {
    await setVoteTime(userID)
    return await Vote.deleteOne({_id: vote.id})
  }
  vote.voteType = "upvote"
  await setVoteTime(userID)
  return await vote.save()
}

const downVote = async (userID, targetID) => {
  let vote = await Vote.findOne({user: userID, targetUser: targetID})
  if (!vote) {
    const newVote = new Vote({
      user: userID,
      targetUser: targetID,
      voteType: "downvote",
    })
    await setVoteTime(userID)
    return await newVote.save()
  }
  if(vote.voteType == "downvote") {
    await setVoteTime(userId)
    return await Vote.deleteOne({_id: vote.id})
  }
  vote.voteType = "downvote"
  await setVoteTime(userID)
  return await vote.save()
}

module.exports = { upVote, downVote };
