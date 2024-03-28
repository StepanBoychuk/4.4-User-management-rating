const cleanResponse = (user) => {
  return {
    _id: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    rating: user.rating,
  };
};

module.exports = cleanResponse;
