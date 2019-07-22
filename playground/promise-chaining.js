require("../src/db/mongoose");
const User = require("../src/models/user");

// 5d346afa9a86212d8cd47763

User.findByIdAndUpdate("5d33bd0af71a6116ec89e68f", { age: 1 })
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
