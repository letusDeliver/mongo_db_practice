use("e-commerce");

db.users.find();

// db.users.insertOne({
//   name: 'Kunal',
//   email: 'kunal@kunal.com',
//   address: {
//     street: 'ABC',
//     city: 'Noida',
//     country: 'India'
//   },
//   gender: 'male',
//   age: 25
// })









//creating schema for collections
// db.createCollection("users", {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: ["name", "email", "address"],
//       properties: {
//         name: {
//           bsonType: "string",
//           description: "must be a string and is required",
//         },
//         email: {
//           bsonType: "string",
//           description: "must be a string and is required",
//         },
//         address: {
//           bsonType: "object",
//           required: ["street", "city", "country"],
//           description:
//             "address is required and must contain street, city and country",
//           properties: {
//             street: {
//               bsonType: "string",
//               description: "street must be provided and must be a string",
//             },
//             city: {
//               bsonType: "string",
//               description: "city must be provided and must be a string",
//             },
//             country: {
//               bsonType: "string",
//               description: "country must be provided and must be a string",
//             },
//           },
//         },
//         age: {
//           bsonType: 'number'
//         },
//         gender: {
//           bsonType: 'string'
//         }
//       },
//     },
//   },
// });

// db.users.drop();
