use("admin");

db.users.find();


//replaceOne(): replace an existig document

//updateMany(): update many matching documents at once

// db.users.updateMany(
//   { role: "Admin" },
//   {
//     $set: {
//       age: 25,
//       gender: "Male",
//     },
//   }
// );

// db.users.updateMany(
//   { gender: "Female" },
//   {
//     $set: {
//       role: "Hr",
//     },
//   }
// );

//command to update one matchig document

// db.users.updateOne(
//   { name: "Surbhi" },
//   {
//     $set: {
//       age: 25,
//       gender: "Female"
//     },
//   }
// );
