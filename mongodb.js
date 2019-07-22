// NOT USING. WE USE MONGOOSE INSTEAD

// const { MongoClient, ObjectId } = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName = "task-manager";

// // const id = new ObjectId();
// // console.log(id.id.length);

// MongoClient.connect(
//   connectionURL,
//   {
//     useNewUrlParser: true
//   },
//   (error, client) => {
//     if (error) return console.log("Unable to connect to database");

//     const db = client.db(databaseName);

// CREATE
// db.collection("users").insertOne(
//   {
//     name: "Vikram",
//     age: 26
//   },
//   (error, result) => {
//     if (error) return console.log("Enable to insert user");

//     console.log(result.ops);
//   }
// );

// db.collection("users").insertMany(
//   [
//     {
//       name: "Jen",
//       age: 28
//     },
//     {
//       name: "Gunther",
//       age: 27
//     }
//   ],
//   (error, result) => {
//     if (error) return console.log("Enable to insert user");

//     console.log(result.ops);
//   }
// );

// READ

// db.collection("users").findOne(
//   { _id: new ObjectId("5d322486999a77286ce28352") },
//   (error, user) => {
//     if (error) return console.log("Unable to fetch");

//     console.log(user);
//   }
// );

// db.collection("users")
//   .find({ age: 32 })
//   .toArray((error, users) => {
//     if (error) return console.log("Unable to fetch users");

//     console.log(users);
//   });

// db.collection("users")
//   .find({ age: 32 })
//   .count((error, count) => {
//     if (error) return console.log("Unable to fetch users");

//     console.log(count);
//   });

// db.collection("tasks").findOne(
//   { _id: new ObjectId("5d3221afba5f256e84898e6b") },
//   (error, task) => {
//     if (error) return console.log(error);

//     console.log(task);
//   }
// );

// db.collection("tasks")
//   .find({ completed: false })
//   .toArray((error, tasks) => {
//     if (error) return console.log(error);

//     console.log(tasks);
//   });

// UPDATE

// db.collection("users")
//   .updateOne(
//     { _id: new ObjectId("5d321fd2c3a0b77070973c94") },
//     {
//       $set: {
//         name: "Mike"
//       }
//     }
//   )
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// db.collection("users")
//   .updateOne(
//     { _id: new ObjectId("5d321fd2c3a0b77070973c94") },
//     {
//       $inc: {
//         age: 1
//       }
//     }
//   )
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// db.collection("tasks")
//   .updateMany(
//     { completed: false },
//     {
//       $set: {
//         completed: true
//       }
//     }
//   )
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// DELETE

// db.collection("users")
//   .deleteMany({ age: 27 })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// db.collection("tasks")
//   .deleteOne({ description: "Add 3 documents" })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });
//   }
// );
