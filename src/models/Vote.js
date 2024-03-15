const { Schema, model } = require("mongoose");

const VoteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  targetUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  voteType: {
    type: String,
    enum: ["upvote", "downvote"],
    required: true,
  },
});

const Vote = model("Votes", VoteSchema, "votes");

module.exports = Vote;
