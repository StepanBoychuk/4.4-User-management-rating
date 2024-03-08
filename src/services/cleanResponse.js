const cleanResponse = (user) => {
  const ratingNumber = user.rating.upVotes.length - user.rating.downVotes.length
  return {
    _id: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    rating: ratingNumber
  };
};

module.exports = cleanResponse;
