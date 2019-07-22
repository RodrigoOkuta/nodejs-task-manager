require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5d346ce47315a316d4b2c7d8")
//   .then(() => {
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id, completed) => {
  await Task.findByIdAndDelete(id);
  return await Task.countDocuments({ completed });
};

deleteTaskAndCount("5d346cbf7315a316d4b2c7d7", false)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
